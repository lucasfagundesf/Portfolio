import { Container } from "./styles";
import { List } from "../List";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import menu from "../../assets/menu.svg"
import { Link } from "react-router-dom";
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
                <li><HiHashtag /><Link to="/home">home</Link></li>
                <li><HiHashtag /><Link to="/projetos">projetos</Link></li>
                <li><HiHashtag /><Link to="/sobre">sobre mim</Link></li>
                <li><HiHashtag /><Link to="/contatos">contatos</Link></li>
            </List>
            <div className="menu" onClick={onOpenMenu}>
                <img src={menu} alt="icone de menu" />
            </div>
        </Container>
    );
}