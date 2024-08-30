import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 19.6rem;
    

    h2{
        border: 1px solid ${({theme}) => theme.COLORS.FONT};
        border-bottom: none;
        padding: 0.8rem;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.TITLE};
    }
    p{
        border: 1px solid ;
        color: ${({theme}) => theme.COLORS.FONT};
        padding: 0.8rem;
        font-size: 1.6rem;
    }
`