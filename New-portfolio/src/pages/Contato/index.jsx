import {Container} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import barra from "../../assets/barra.svg"

export function Contato() {
    return(
        <Container>
            <main>
                <Header />
                <section>
                    <div className="title">
                        <img src={barra} alt="" />
                        <h2>contato</h2>
                    </div>
                </section>
                <Footer />
            </main>
        </Container>
    )
}
