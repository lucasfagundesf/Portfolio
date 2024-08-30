import {Container} from './styles';


export function Quote({quote, author, icon}) {
    return (
        <Container>
            <div className="quote" id='quote1'>
                <img src={icon} alt="icon Quote" />
            </div>
            <h2>
                {quote}
            </h2>
            
            <div className="quote" id='quote2'>
                <img src={icon} alt="icon Quote" />
            </div>
            <div className="author">
                <p>{author}</p>
            </div>
        </Container>
    )
}