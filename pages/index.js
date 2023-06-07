import { React } from "react";
import { Form, Text, Figure } from "../components";
import { Box, Column, Control, Level, Field, Help, Icon, Input, Block, Button, Section } from "rbx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


function Login() {
    return (
        <>
            <Head>
                <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="content-language" content="pt-br" />
                <meta name="author" content="Conatto" />
                <meta name="description" content="Um exemplo de uma aplicação web para venda de livros" />
                <meta name="keywords" content="portfolio, aplicação web, livraria, livros, livraria virtual" />
                <meta name="robots" content="Index, follow" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
                <title>Bem-Vindo! - Livraria Virtual</title>
            </Head>
            <Section marginless={true}>
                <Level marginless={true}>
                    <Level.Item>
                        <Column.Group>
                            <Column>
                                <Box className="border-burgundy">
                                    <Column>
                                        <Level>
                                            <Figure className={"image"}>
                                                <Link href={"/"}>
                                                    <Image id="logo" src={"/_img/LivrariaLogo.png"} width={256} height={127} alt="Logotipo do site" />
                                                </Link>
                                            </Figure>
                                        </Level>
                                        <Level.Item>
                                            <form id={"login"}>
                                                <Block>
                                                    <Field>
                                                        <Help id={"mensagem"}></Help>
                                                        <Control iconLeft={true} >
                                                            <Icon align="left"><i className="fa fa-envelope"></i></Icon>
                                                            <Input type={"text"} name={"usuario"} readOnly={true} defaultValue={"Visitante"}></Input>
                                                        </Control>
                                                    </Field>
                                                </Block>

                                                <Block>
                                                    <Field>
                                                        <Help id={"mensagem"}></Help>
                                                        <Control iconLeft={true} >
                                                            <Icon align="left"><i className="fa fa-envelope"></i></Icon>
                                                            <Input type={"password"} name={"senha"} readOnly={true} defaultValue={"Visitante"}></Input>
                                                        </Control>
                                                    </Field>
                                                </Block>

                                                <Block>
                                                    <Level.Item>
                                                        <Column.Group>
                                                            <Column>
                                                                <Link href={"livraria/home"}>
                                                                    <Button color={"link"} outlined={true}>Login</Button>
                                                                </Link>
                                                            </Column>
                                                            <Column>
                                                                <Link href={"/"}>
                                                                    <Button color={"success"} outlined={true}>Cadastro</Button>
                                                                </Link>
                                                            </Column>
                                                        </Column.Group>
                                                    </Level.Item>
                                                </Block>
                                            </form>
                                        </Level.Item>
                                        <hr />
                                        <Block>
                                            <Level marginless={true}>
                                                <Level.Item>
                                                    <strong><Text css={"has-text-white has-text-centered"}>Este é um projeto demosntrativo.</Text></strong>
                                                </Level.Item>
                                            </Level>
                                            <Level marginless={true}>
                                                <Level.Item>
                                                    <Link href={"https://conatto.github.io"}>
                                                        <strong className="has-text-success">Saiba Mais</strong>
                                                    </Link>
                                                </Level.Item>
                                            </Level>
                                        </Block>
                                    </Column>
                                </Box>
                            </Column>
                        </Column.Group>
                    </Level.Item>
                </Level>
            </Section>
        </>
    );
}

export default Login;