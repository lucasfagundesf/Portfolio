import { Container } from "./styles";
import { List } from "../List";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import { DropDown } from "../DropDown";
import { DarkMode } from "../DarkMode"

export function Header (){
    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>Lucas Fagundes</h1>
            </div>    
            <List> 
                <li><HiHashtag />home </li>
                <li><HiHashtag />projetos </li>
                <li><HiHashtag />sobre mim </li>
                <li><HiHashtag />contatos </li>
            </List>
            <DarkMode />
        </Container>
    );
}