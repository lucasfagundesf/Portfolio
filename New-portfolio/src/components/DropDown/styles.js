import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;

    .dropdown{
        width: 100%;
       select{
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.FONT};
        background-color: transparent; 
        border: none;
        outline: none;
       }
       option {
        border-radius: 0px;
        width: 100%;
        font-size: 1rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        color: ${({ theme }) => theme.COLORS.FONT};
       }
       option:focus{
        background-color: ${({ theme }) => theme.COLORS.FONT};
       }
        
    }
    
`;