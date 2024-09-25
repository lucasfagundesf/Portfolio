import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    main{
        max-width: 100rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        margin: auto;
    }
    
    .title{
        margin: 4.8rem 1rem;
        gap: .5rem;
        display: flex;
        align-items: center;
    }
    section{
        h1{
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
        margin: 4.8rem 1rem;
        svg{
            width: 2rem;
            height: 2rem;
            fill: ${({ theme }) => theme.COLORS.PRIMARY};
        }
    }
    .title{
        display: flex;
    }
    .aboutSection{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 4.8rem 2rem;
    }
    .about{
        
        .profile{
            max-width: 34rem;
        }
        p{
            margin-top: 2rem;
            margin-bottom: 2rem ;
            color: ${({ theme }) => theme.COLORS.FONT};
            font-size: 1.6rem;
        }
    }
    .cardSkill{
        margin: auto;
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 3rem;
    }
    #skill{
        
        .skillsSection{
            padding: 2rem 3.2rem;
            display: flex;
            gap: 5.9rem;
            flex-wrap: wrap;
            justify-content: space-between;
            .skills{
                margin-top: 3rem;
                margin-left: 5rem;
                max-width: 34.9rem;
                max-height: 20.3rem; 
            }
            
            .text{
                > p{
                    text-align: justify;
                    max-width: 50rem;
                    padding: 3rem 0;
                    color: ${({ theme }) => theme.COLORS.FONT};
                    font-size: 1.8rem;
                }
            Button:hover{
                background-color: ${({theme}) => theme.COLORS.HOVER_PRIMARY};
            }
                
            }
        }
    }
    #funFacts{
        .logo{
            display: none;
        }
        strong{
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
            font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
            margin-left: 1rem;
            margin-right: 1rem;
        }
        .facts{
            width: fit-content;
            display: flex;
            color: ${({ theme }) => theme.COLORS.FONT};
            padding: 0.8rem;
            font-size: 1.6rem;
            border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        section{
            flex-direction: row;
            flex-wrap: wrap;
        }
        .aboutSection{
            flex-direction: row-reverse;
            gap: 17rem;
        }
        #skill{
            .cardSkill{
                flex-wrap: nowrap;
            }
        }
        #funFacts{
            .fatos{
                display: flex;
                gap: 15rem;
            }
            .logo{
                display: block;
                margin-right: 2rem;
            }
            .cardSkill{
                justify-content: left;
            }
        }
        
    }
`;