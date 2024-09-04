import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    main{
        width: 90%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        margin: auto;
    }
    section{
        position: relative;
        border-top: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
        width: 100%;
        margin-top: 4.8rem;
        padding-bottom: 3rem;
        
        a{
            text-decoration: none;
            padding: 2rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            top: -7.5%;
            right: 0;
            position: absolute;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.TITLE};

            .seta{
                margin-left: 1rem;
                max-width: 2rem;
                max-height: 4.2rem;
                color: ${({ theme }) => theme.COLORS.TITLE};
            }
            
        }

        svg{
            color: ${({ theme }) => theme.COLORS.PRIMARY};
            max-width: 2rem;
            max-height: 4.2rem;
        }

        > h2{
            padding: 1rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            position: absolute;
            top: -3rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
            font-size: 2.6rem;
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        }

        .skillsSection{
            padding: 2rem 3.2rem;
            display: flex;
            justify-content: space-between;

            .skills{
            
            max-width: 34.9rem;
            height: 29.3rem; 
            }
            .cardSkill{
                justify-content: flex-end;
                flex-wrap: wrap;
                gap: 1.6rem;
                display: flex;
                max-width: 59rem;
            }
            .text{
                > p{
                text-align: justify;
                max-width: 50rem;
                padding: 3rem 0;
                color: ${({ theme }) => theme.COLORS.FONT};
                font-size: 1.4rem;
            }
            Button:hover{
                background-color: ${({theme}) => theme.COLORS.HOVER_PRIMARY};
            }
            
        }
            .message{
                border: 1px solid ${({theme}) => theme.COLORS.FONT};
                padding: 1.6rem;
                max-width: 34.6rem;
                display: flex;
                flex-direction: column;

                h1{
                    font-size: 1.6rem;
                    font-weight: ${({theme}) => theme.WEIGHT.REGULAR};
                    color: ${({theme}) => theme.COLORS.TITLE};
                }
                .mail{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                    margin-top: 1.6rem;
                    p{
                        font-size: 1.4rem;
                        color: ${({ theme }) => theme.COLORS.FONT};
                    }
                    svg{
                        width: 2.4rem;
                        height: 2.4rem;
                        fill: ${({ theme }) => theme.COLORS.FONT};
                    }
                }
                
            }
    }
}
    
`;