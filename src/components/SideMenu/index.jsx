import { PiX } from "react-icons/pi";
import { HiHashtag } from "react-icons/hi2";
import logo from "../../assets/Logo.svg";
import { Container, Header, Nav } from "./styles";
import { Footer } from "../Footer";
import { DarkMode } from "../DarkMode";
import { Link } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Lucas Fagundes</h1>
        </div>
        {menuIsOpen && (
          <button onClick={onCloseMenu}>
            <PiX />
          </button>
        )}
      </Header>
      <Nav>
        <Link to="/Portfolio" onClick={onCloseMenu && scrollToTop}>
          <HiHashtag />
          home
        </Link>
        <Link to="/projetos" onClick={onCloseMenu && scrollToTop}>
          <HiHashtag />
          projetos
        </Link>
        <Link to="/sobre" onClick={onCloseMenu && scrollToTop}>
          <HiHashtag />
          sobre-mim
        </Link>
        <Link to="/contatos" onClick={onCloseMenu && scrollToTop}>
          <HiHashtag />
          contatos
        </Link>
      </Nav>
      <Footer />
    </Container>
  );
}
