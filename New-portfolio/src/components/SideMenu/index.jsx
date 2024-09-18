import { PiX } from "react-icons/pi";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import { Container, Header, Nav} from "./styles";
import { Footer } from "../Footer";
import { DarkMode } from "../DarkMode";

export function SideMenu({menuIsOpen, onCloseMenu}) {
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Lucas Fagundes</h1>
                </div>
                {
                    menuIsOpen && 
                    <button onClick={onCloseMenu}>
                        <PiX />
                    </button>
                }
            </Header>
            <Nav>
                <a href="#home" onClick={onCloseMenu}><HiHashtag/>home</a>
                <a href="#projetos" onClick={onCloseMenu}><HiHashtag/>projetos</a>
                <a href="#sobre" onClick={onCloseMenu}><HiHashtag/>sobre-mim</a>
                <a href="#contato" onClick={onCloseMenu}><HiHashtag/>contatos</a>
            </Nav>
            <Footer/>
        </Container>
    )
}