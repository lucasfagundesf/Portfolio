import { Container } from "./styles";
import logo from "../../assets/Logo.svg";
import github from "../../assets/Github.svg";
import linkedin from "../../assets/Linkedin.svg";
import figma from "../../assets/Figma.svg";


export function Footer() {
    return(
        <Container>
            <div className="media">
                <div className="sideLeft">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <h1>Lucas Fagundes</h1>
                    </div>
                    <p>front-end developer</p>
                </div>
                <div className="sideRight">
                    <h1>Media</h1>
                    <div className="media">
                        <div className="icon">
                            <a href="https://github.com/lucasfagundesf"><img src={github} alt="github icone" /></a>
                            <a href="https://www.linkedin.com/in/lucasfagundesfranco/"><img src={linkedin} alt="linkedin icone" /></a>
                            <a href="https://www.figma.com/@lucasfagundes"><img src={figma} alt="figma icone" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <p>developed by Lucas Fagundes</p>
        </Container>
    );
};