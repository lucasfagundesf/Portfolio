import { Container } from "./styles";
import { List } from "../List";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import menu from "../../assets/menu.svg"
import { DropDown } from "../DropDown";
import { DarkMode } from "../DarkMode"

export function Header ({onOpenMenu}){
    return (
        <Container>
            
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>Lucas Fagundes</h1>
            </div>    
            <List> 
                <li><a href="#home"><HiHashtag />home</a></li>
                <li><a href="#projetos"><HiHashtag />projetos</a></li>
                <li><a href="#sobre"><HiHashtag />sobre mim</a></li>
                <li><a href="#contato"><HiHashtag />contatos</a></li>
            </List>
            <div className="menu" onClick={onOpenMenu}>
                <img src={menu} alt="icone de menu" />
            </div>
        </Container>
    );
}