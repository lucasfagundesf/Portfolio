import styled from "styled-components";

export const Container = styled.header`
    position: sticky;
    margin: auto;
    padding: 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        img {
            width: 16px;
            height: 16px;
        }
        h1{
            font-size: 1rem;
            font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
    }
    
    ul{
        display: flex;
        text-align: center;
        justify-content: center;
        gap: 3.2rem;
        width: 400px;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FONT};
        list-style: none;

        li {
            display: flex;
            
           svg {
            width: 1rem;
            height: 1rem;
            margin-top: 1px;
            fill: ${({ theme }) => theme.COLORS.PRIMARY};
        } 

        
        }
        li:hover{
            color: ${({ theme }) => theme.COLORS.TITLE};
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        }
        
    }
`;