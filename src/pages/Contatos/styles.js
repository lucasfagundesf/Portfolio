import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  main {
    margin: auto;
    height: 100vh;
    max-width: 100rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
  }
  .title {
    display: flex;
    align-items: center;
  }
  section {
    margin: 4.8rem 2rem;
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
    h1 {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.TITLE};
      font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
    }
    p {
      margin-top: 2rem;
      color: ${({ theme }) => theme.COLORS.FONT};
      font-size: 1.6rem;
    }
  }
  .form {
    margin-bottom: 10rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .firstLine {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  .button {
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0.8rem 1rem;
    font-size: 2rem;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.TITLE};
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  }
  .button:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_PRIMARY};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .form {
      margin-bottom: 16.5rem;
    }
  }
`;
