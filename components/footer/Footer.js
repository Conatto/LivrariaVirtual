import Link from "next/link";
import { Column, Content, Footer, Generic, Level } from "rbx";

function FooterStruct() {
    return (
        <Footer className={"border-top-burgundy"}>
            <Content textAlign={"center"}>
                <Column>
                    <Level.Item>
                        <Generic as={"p"} textAlign={"center"} textColor={"white"} textWeight={"bold"}>
                            Este é um projeto demosntrativo.
                        </Generic>
                    </Level.Item>
                    
                    <Level.Item>
                        <Link href={"https://conatto.github.io"}>
                            <Generic as={"p"} textAlign={"center"} textColor={"success"} textWeight={"bold"}>
                                Saiba Mais
                            </Generic>
                        </Link>
                    </Level.Item>
                </Column>
            </Content>
        </Footer>
    );
}

export default FooterStruct;