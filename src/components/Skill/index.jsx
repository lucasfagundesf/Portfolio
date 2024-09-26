import { Container } from "./styles.js";

export function Skill({title, list}) {
    return(
        <Container>
            <h2>{title}</h2>
            <p>{list}</p>
        </Container>
    )

}