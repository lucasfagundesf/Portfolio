import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
    border-top: 1px solid ${({theme}) => theme.COLORS.FONT};
    padding: 3.2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.TITLE};
    }
    .sideLeft{
        p{
            margin-top: .5rem;
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.FONT};
        }
        .logo{
            gap: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }
    .sideRight{   
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        h1{
            text-align: center;
        }
    }
`;