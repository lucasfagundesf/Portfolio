import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};


    main{
        width: 90%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        margin: auto;

        section{
            margin: 4.7rem 0;
            h2{
                font-size: 2.4rem;
                color: ${({ theme }) => theme.COLORS.TITLE};
                font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
            }
        }
    }
`;