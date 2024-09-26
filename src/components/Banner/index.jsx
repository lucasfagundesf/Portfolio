import { Container } from './styles';
import { Button } from '../Button';
import photo from '../../assets/photo.png'

export function Banner({title,desc,}) {
    return (
        <Container>
            <div className="text">
                <h1>Lucas Fagundes é um <strong>Desenvolvedor Front-end</strong></h1>
                <p>Ele constroi websites responsivos onde a tecnologia encontra a criatividade</p>
                <Button 
                    title={"Entre em contato !"}
                />
            </div>
            <div className="perfil">
                <div className="person"><img src={photo} alt="Ilustração de pessoa"/></div>

                    <div className='above'>
                        <div className='box'></div>
                       <p>Atualmente trabalhando no <strong>Portfolio</strong></p> 
                    </div>
                
            </div>
        </Container>
    )
}