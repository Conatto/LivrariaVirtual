import { React } from "react";
import { SingIn } from "../components";

function Login() {
    return (
        <>
            <div>
                <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="content-language" content="pt-br" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Um exemplo de uma aplicação web para venda de livros" />
                <meta name="keywords" content="portfolio, aplicação web, livraria, livros, livraria virtual" />
                <meta name="robots" content="Index, follow" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Bem-Vindo! - Livraria Virtual</title>
            </div>
            <section className="section level">
                <div className="level-item">
                    <div className="mt-8 column is-4">
                        <div className="box is-framed-burgundy">
                            <div className="column level">
                                <div className="level level-item">
                                    <figure className="image is-index-logo mb-6">
                                        <a href="/"><img id="logo" src="_img\LivrariaLogo.png" /></a>
                                    </figure>
                                </div>
                                <div className="level-item mt-7 is-mobile">
                                    <SingIn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}

export default Login;