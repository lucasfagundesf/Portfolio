import {Container} from './styles';
import {Button} from "../Button";
import png from "../../assets/btnIcon.svg";
import { FaCode } from "react-icons/fa6";

export function Card({img, title,desc,tags}){
    return (
        <Container>
            <img src={img} alt="preview site image" />

            <div className="tags">{tags}</div>

            <div className="cont">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="btn">
                    <Button
                        title= {"Live"}
                        icon= {png}
                    />
                    <button className='btnGray'>
                        Cached <FaCode/>
                    </button>
                </div>
            </div>
            
        </Container>
    )
}