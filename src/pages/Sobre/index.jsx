import { useState } from "react";
import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Skill } from "../../components/Skill";
import barra from "../../assets/barra.svg"
import profile from "../../assets/about.png"
import logoGroup from "../../assets/logoGroup.svg"
import { Footer } from "../../components/Footer";

import { FaHashtag } from "react-icons/fa";

export function Sobre() {
    const [menuIsOpen, setMenuIsOpen ] = useState(false);
    return(
        <Container>
            <main>
                <SideMenu 
                    menuIsOpen={menuIsOpen}
                    onCloseMenu={() => setMenuIsOpen(false)}
                />
                <Header onOpenMenu={() => setMenuIsOpen(true)} />
                
                
                
                <section className="about">
                        <div className="title">
                            <img src={barra} alt="icone de barra" />
                            <h1>sobre mim</h1>
                        </div>
                    <div className="aboutSection">
                        <img src={profile} alt="imagem de perfil" className="profile" />
                        <div className="text">
                            <p>
                                Olá, eu sou Lucas Fagundes!
                            </p>
                            <p>
                                Sou um desenvolvedor front-end autodidata, moro em Taubaté, Brasil. Posso desenvolver sites responsivos do zero e transformá-los em experiências web modernas e amigáveis.
                            </p>
                            <p>
                                Transformar minha criatividade e conhecimento em sites tem sido minha paixão por mais de um ano. Sempre me esforço para aprender sobre as mais novas tecnologias e frameworks.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="skill">
                    <h1><FaHashtag/>skills</h1>
                    <div className="skillsSection">
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
                <section id="funFacts">
                    <h1><FaHashtag/>fatos curiosos sobre mim</h1>
                    <div className="fatos">
                        <div className="cardSkill">
                            <p className="facts">eu amo One Piece.</p>
                            <p className="facts">eu gosto de jogar jogos com meus amigos.</p>
                            <p className="facts">eu gosto de <strong>hamburguer</strong> e <strong>strogonoff.</strong></p>
                            <p className="facts">eu tenho um irmão e uma irmã.</p>
                            <p className="facts">eu gosto de dirigir.</p>
                            <p className="facts">eu estou no penúltimo semestre da faculdade</p>
                        
                        </div>
                        <img src={logoGroup} alt="imagem logo" className="logo" />
                    </div>
                    
                </section>
                <Footer />
            </main>
        </Container>
    )
}