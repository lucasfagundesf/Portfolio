import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    svg{
        height: 1.2rem;
        width: 1.2rem;
        color: ${({ theme }) => theme.COLORS.TITLE};
    }
    button{
        border: none;
    }
    button:hover{
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
    .moon{
        display: none;
    }
    .moon.toggled{
        display: flex;
    }
    
    .sun.toggled{
        display: none;
    }
    .darkmode{
        padding: 0.2rem;
        display: flex;
        align-items: center;
        position: relative;
        width: 6rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARKMODE};
        cursor: pointer;
    }
    
    .darkmode .toggled{
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        transition: .6s ease, .6s ease;
    }
    .btn{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        width: 1.5rem;
        background-color: ${({ theme }) => theme.COLORS.FONT};
        transform: translateX(0);
        transition: .5s ease, .5s ease;
    }
    .btn.toggled{
        transform: translateX(40px);
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
    
`;