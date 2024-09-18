import { useState } from "react";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { Header } from "../../components/Header";
import { DarkMode } from "../../components/DarkMode";
import { Quote } from "../../components/Quote";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Banner } from "../../components/Banner";
import { Skill } from "../../components/Skill";
import quote from "../../assets/quote.svg";
import proj from "../../assets/proj.png";
import viewMore from "../../assets/~~_.svg";
import seta from "../../assets/seta.svg";
import skills from "../../assets/skills.png";
import about from "../../assets/about.png";
import { FaHashtag } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";


export function Home() {
    const [menuIsOpen, setMenuIsOpen ] = useState(false);

    return (
        <Container>
            <main id="home">
                <SideMenu 
                    menuIsOpen={menuIsOpen}
                    onCloseMenu={() => setMenuIsOpen(false)}
                />
                <Header onOpenMenu={() => setMenuIsOpen(true)} />
                <Banner />
                <Quote
                    quote={"Se você não correr riscos, não poderá criar um futuro"}
                    author={"- Monkey D. Luffy"}
                    icon={quote}
                />
                <section id="projetos" >
                    <h2><FaHashtag/>projects</h2>
                    <a href="">
                        view all 
                        <img className="seta" src={viewMore} alt="seta" />
                    </a>
                    <Card
                        img={proj}
                        tags={"HTML CSS JS REACT"}
                        title={"CherNodes"}
                        desc={"Minecraft servers hosting "}
                    />
                    <Card
                        img={proj}
                        tags={"HTML CSS JS REACT"}
                        title={"CherNodes"}
                        desc={"Minecraft servers hosting "}
                    />
                    <Card
                        img={proj}
                        tags={"HTML CSS JS REACT"}
                        title={"CherNodes"}
                        desc={"Minecraft servers hosting "}
                    /><Card
                    img={proj}
                    tags={"HTML CSS JS REACT"}
                    title={"CherNodes"}
                    desc={"Minecraft servers hosting "}
                />
                </section>
                <section id="skill">
                    <h2><FaHashtag/>skills</h2>
                    <div className="skillsSection">
                        <img className="skills" src={skills} alt="" />
                        <div className="cardSkill">
                            <Skill 
                                title={"Languages"}
                                list={"JavaScript"}
                            />
                            <Skill 
                                title={"Databases"}
                                list={"SQLite Oracle "}
                            />
                            <Skill 
                                title={"Tools"}
                                list={"VSCode Figma Git "}
                            />
                            <Skill 
                                title={"Other"}
                                list={"HTML CSS SASS "}
                            />
                            <Skill 
                                title={"Frameworks"}
                                list={"React "}
                            />
                            
                        </div>
                    </div>
                </section>
                <section id="sobre">
                    <h2><FaHashtag/>sobre mim</h2>
                    <div className="skillsSection">
                        <div className="text">
                            <p>
                                Olá, eu sou Lucas Fagundes!
                            </p>
                            <p>
                            Sou um desenvolvedor front-end autodidata, moro em Taubaté, Brasil. Posso desenvolver sites responsivos do zero e transformá-los em experiências web modernas e amigáveis.
                            </p>
                            <p>
                            Transformar minha criatividade e conhecimento em sites tem sido minha paixão por mais de um ano. Sempre me esforço para aprender sobre as mais novas tecnologias e frameworks."
                            </p>
                            <Button 
                                title={'Leia mais'}
                                icon= {seta}
                            />
                        </div>
                        <img src={about} alt="" id="about" />
                    </div>
                </section>
                <section id="contato">
                    <h2><FaHashtag/>contacts</h2>
                    <div className="skillsSection">
                        <div className="text">
                            <p >
                            Estou interessado em oportunidades de freelance. No entanto, se você tiver outro pedido ou pergunta, não hesite em entrar em contato comigo
                            </p>
                        </div>
                        <div className="message">

                            <h1>Message me here</h1>
                            <div className="mail">
                                <IoIosMail />
                                <p>lucas_fagundesfranco@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
            
        </Container>
    )
}