import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: center;
    margin: auto;
    margin-top: 10rem;
    margin-bottom: 7rem;
    max-width: 70rem;
    color: ${({ theme }) => theme.COLORS.FONT};
    
    img{
        width: 2rem;
        height: 2.5rem;
    }
    .quote{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        width: 3.5rem;
    }
    #quote1{
        left: 15%;
        top: -8%;
    }

    > h2{
        font-size: 2rem;
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        padding: 3.2rem;
        border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        height: 9.5rem;
        max-width: 78rem;
    }
    .author{
        padding: 1.6rem;
        max-width: 20rem;        
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        border-top: none;
    }
    p {
        font-size: 1.6rem;
    }
    #quote2{
        right: 3%;
        bottom: 27%;
    }
`;