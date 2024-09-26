import {Container} from './styles';
import {Button} from "../Button";
import png from "../../assets/btnIcon.svg";
import { FaCode } from "react-icons/fa6";

export function Card({img, title,desc,tags,href,href2}){
    return (
        <Container>
            <img className='' src={img} alt="preview site image" />

            <div className="tags">{tags}</div>

            <div className="cont">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="btn">
                    <a href={href} target='blank'>
                        <Button
                            title= {"Live"}
                            icon= {png}
                        />
                    </a>
                    <a href={href2} target='blank'>
                        <button className='btnGray'>
                            Cached <FaCode/>
                        </button>
                    </a>
                </div>
                
            </div>
        </Container>
    )
}
