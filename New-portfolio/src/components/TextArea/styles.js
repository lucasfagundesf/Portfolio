import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid;

   
    > label {
        position: absolute;
        top: 15%; 
        left: 0.6rem;
        transform: translateY(-50%); 
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.FONT};
        transition: all 0.2s ease; 
    }

    > textarea {
        width: 100%;
        height: 11.9rem;
        border: 1px solid ${({ theme }) => theme.COLORS.FONT};
        color: ${({ theme }) => theme.COLORS.FONT};
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.FONTS.FIRA_CODE};
        font-weight: ${({ theme }) => theme.WEIGHT.REGULAR};
        background-color: transparent;
        outline: none;
        padding: 0.6rem; 
    }

    /* Move o label quando o input está focado ou contém texto */
    >textarea:focus ~ label,
    >textarea:not(:placeholder-shown) ~ label{
        top: -.1rem; 
        left: 0.6rem; 
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    }
`;
