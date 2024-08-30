import { Container } from "./styles.js";

export function List ({children}) {
    return (
        <Container>
            <ul>
                {children}
            </ul>
        </Container>
    )
}