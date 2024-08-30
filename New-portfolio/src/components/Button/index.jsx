import { Container } from "./styles";

export function Button({ icon, title}){
    return (
        <Container type="button">
            <span>{title}</span>
            <img src={icon} />
        </Container>
    )
}