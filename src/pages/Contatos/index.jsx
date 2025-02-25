import { useState } from "react";
import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";
import barra from "../../assets/barra.svg";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export function Contatos() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  function handleSuccess() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      animation: true,
      timer: 1500,
      color: "#ABB2BF",
      background: "#2D3037",
    });
  }
  function handleError() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      animation: true,
      color: "#ABB2BF",
      background: "#2D3037",
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || title === "" || message === "") {
      Swal.fire({
        title: "Está faltando dados!",
        text: "Preencha todos os campos para enviar",
        icon: "warning",
        animation: true,
        color: "#ABB2BF",
        background: "#2D3037",
        customClass: {
          confirmButton: "myButton",
        },
      });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_title: title,
      message: message,
    };

    emailjs
      .send(
        "service_o2t8fyx",
        "template_btk75rl",
        templateParams,
        "rgGF_IUe3E5k3x_aL"
      )
      .then(
        (response) => {
          handleSuccess();
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          handleError();
          setAlertError(true);
          return;
        }
      );
  }
  return (
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
            <h1>entre em contato</h1>
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
            <input className="button" type="submit" value="Enviar" />
          </form>
        </section>
        <Footer />
      </main>
    </Container>
  );
}
