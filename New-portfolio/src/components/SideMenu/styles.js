import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.aside`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    display: flex;
    flex-direction: column;

    position: fixed;
    z-index: 3;
    transform: translateX(-200%);
    transition: transform 0.3s ease-in-out;

    Footer{
        position: fixed;
        bottom: 0;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        
        &[data-menu-is-open="true"] {
            transform: translateX(0px);
        }

    }
`;

export const Header = styled.header`
    overflow: hidden;
    position: sticky;
    margin-top: .5rem;
    padding: 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        img {
            width: 2rem;
            height: 2rem;
        }
        h1{
            font-size: 1.6rem;
            font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
    }

    button{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        background: transparent;
        border: none;
        font-size: 2.1rem;
        font-weight: ${({ theme }) => theme.WEIGHT.NORMAL};
    }

    svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.FONT};
        font-weight: ${({ theme }) => theme.WEIGHT.BOLD};
    }
    svg:hover{
        color: ${({ theme }) => theme.COLORS.TITLE};
    }
    
`;


export const Nav = styled.nav`
    width: 90%;
    height: 100%;
    margin: 3.6rem 1.9rem;
    padding: 1rem 0;
    

    a {
        display: block;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.FONT};
        font-size: 2.4rem;
        font-weight: 300;
        padding: 1rem 0;
        cursor: pointer;
        

        svg{
            fill: ${({ theme }) => theme.COLORS.PRIMARY};
        }
    }
    a:hover{
        color: ${({ theme }) => theme.COLORS.TITLE};
    }
    
`;
