import { Container } from "./styles"
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


export function Home() {
    return (
        <Container>
            <main>
                <Header />
                <Banner />
                <Quote
                    quote={"If you don't take risk, you can't creat a future"}
                    author={"- Monkey D. Luffy"}
                    icon={quote}
                />
                <section >
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
                </section>
                <section >
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
                <section >
                    <h2><FaHashtag/>about-me</h2>
                    <div className="skillsSection">
                        <div className="text">
                            <p>
                                Hello, i'm Lucas Fagundes!
                            </p>
                            <p>
                                I’m a self-taught front-end developer based in Taubaté, Brazil. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            </p>
                            <p>
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </p>
                            <Button 
                                title={'Read more'}
                                icon= {seta}
                            />
                        </div>
                        <img src={about} alt="" />
                    </div>
                </section>
                <section >
                    <h2><FaHashtag/>contacts</h2>
                    <div className="skillsSection">
                        <div className="text">
                            <p >
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
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