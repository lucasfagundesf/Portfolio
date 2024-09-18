import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
    margin: auto;
    margin-top: 4.8rem;
    max-width: 30rem;
    color: ${({ theme }) => theme.COLORS.FONT};
    border: 1px solid ${({ theme }) => theme.COLORS.FONT};

    img{
        width: 100%;
    }
    .tags{
        padding: .8rem 1.6rem;
        font-size: 1.6rem;
        border-bottom: 1px solid;
    }
    
    .cont{
        display: flex;
        flex-direction: column;
        padding: 1.6rem;
    }
    h2{
        font-size: 2.4rem;
        font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        color: ${({ theme }) => theme.COLORS.TITLE};
        padding-bottom: 1.6rem;
    }
    p{
        font-size: 1.6rem;
        padding-bottom: 1.6rem;
    }
    .btn{
        display: flex;
        gap: 1.6rem;
    }
    button:hover{
        background-color: ${({ theme }) => theme.COLORS.HOVER_PRIMARY};
    }
    .btnGray{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: .8rem 1rem;
        font-size: 1.3rem;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.FONT};
        border: 1px solid ${({ theme }) => theme.COLORS.FONTS};

        svg {
            min-width: 1rem;
            min-height: 1rem;
            max-height: 2rem;
            max-width: 1.6rem;
            color: ${({ theme }) => theme.COLORS.FONT}
        }
    }
    .btnGray:hover{
        background-color: ${({ theme }) => theme.COLORS.HOVER_GRAY};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    }
`;