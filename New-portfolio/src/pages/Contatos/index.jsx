import { useState } from "react";
import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import barra from "../../assets/barra.svg"

import emailjs from '@emailjs/browser';

export function Contatos() {
    const [menuIsOpen, setMenuIsOpen ] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || title === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            from_title: title,
            message: message,


        }
        
        emailjs.send("service_o2t8fyx", "template_btk75rl", templateParams, "rgGF_IUe3E5k3x_aL")
        .then((response) => {
            alert("email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setTitle('')
            setMessage('')
        }, (error) => {
            console.log("Erro: ", error)
        })
    }
    return(
        <Container>
            <main>
                <SideMenu 
                    menuIsOpen={menuIsOpen}
                    onCloseMenu={() => setMenuIsOpen(false)}
                />
                <Header onOpenMenu={() => setMenuIsOpen(true)} />
                <section>
                <div className="title">
                    <img src={barra} alt="icone de barra" />
                    <h1>projetos</h1>
                </div>
                </section>
                <section id="formulario">
                    <form className="form" onSubmit={sendEmail}>
                        <div className="firstLine">
                            <Input
                                label={"Nome"}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <Input
                                label={"Email"}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <Input
                            label={"Titulo"}
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <TextArea
                            label={"Mensagem"}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <input className="button" type="submit" value="Enviar"/>
                    </form>
                </section>
                <Footer/>
            </main>
        </Container>
    )
}