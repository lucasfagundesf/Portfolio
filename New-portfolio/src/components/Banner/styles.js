import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    margin-top: 6rem ;
    justify-content: space-around;
    align-items: center;

    .text{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 45rem;
        padding-left: 2rem;
        h1{
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
        }
        strong{
            font-size: 2.5rem;
            color: ${({ theme }) => theme.COLORS.PRIMARY};
        }
        p{
            color: ${({ theme }) => theme.COLORS.FONT};
            font-size: 1.6rem;
        }
        Button{
            max-width: 17rem;
        }
        Button:hover{
            background-color: ${({ theme }) => theme.COLORS.HOVER_PRIMARY};
        }
    }
    .perfil{

       img{
            position: relative;
            max-width: 35rem;
                   
        }
        .above {
            display: flex;
            align-items: center;
            gap: 2rem;
            
            padding: .8rem 3rem;
            border: 1px solid ${({ theme }) => theme.COLORS.FONT}
        }
        .box {
                background-color: ${({ theme }) => theme.COLORS.PRIMARY};
                width: 1.6rem;
                height: 1.6rem;
            }
        p{       
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.FONT} ;
            strong{
                color: ${({ theme }) => theme.COLORS.TITLE};
                font-size: 1.2rem;
                font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
            }
        } 
    }
    
`;