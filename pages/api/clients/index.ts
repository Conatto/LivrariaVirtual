import connectionDB from "../../../services/connectionDB";
import { ObjectId } from "mongodb";
import FileStorage from "../../../helpers/FileStorage";
import Formidable from "formidable";
import path, { join } from "path";
//import no from ""
//import path from "path";
//import { inspect } from "util";
//import Busboy from "@fastify/busboy";


export default async function Handler(req, res) {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const { db } = await connectionDB();
                const cursor = await db.collection('livros').find({}).toArray();
                //client.close();
                res.status(200).json({ method: "get", success: true, content: cursor });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "get", success: false, content: error });
            }
        break;
        case 'POST':
            try {
                //const { img } = req.body;
                //if (!item) throw res.status(400).json({ method: "post", success: false, data: error });
                //const objId = new ObjectId();
               
                const form = new Formidable.IncomingForm();
                const uploadFolder = path.join(__dirname, "../../../../public/upload/products");
                form.maxFileSize = 50 * 1024 * 1024;
                form.uploadDir = uploadFolder;

                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        console.log("error parsing files");
                        console.log(err);
                        return res.status(400).json({ 
                            method: "post", 
                            success: false,
                            content: err,
                        });
                    }

                    let inputsData = JSON.parse(fields.inputFields);
                    const renamed = await FileStorage(files.fileImage, uploadFolder);
                    if (renamed.success) inputsData.capa = renamed.content;

                    //const { db, client } = await connectionDB();
                    //const result = await db.collection("livros").insertOne(inputsData);
                    res.status(201).json({ method: "post", success: true, content: inputsData });
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({ method: "post", success: false, content: error });
            }
        break;
    }
}

/**/
export const config = {
  api: {
    bodyParser: false,
  },
};