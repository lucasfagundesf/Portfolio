import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  margin-top: 5rem;
  border-top: 1px solid ${({ theme }) => theme.COLORS.FONT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
  padding: 3.2rem 3.2rem 2rem 3.2rem;
  .media {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  p {
    margin-top: 3rem;
    color: ${({ theme }) => theme.COLORS.FONT};
    font-size: 1.4rem;
    text-align: center;
  }
  h1 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TITLE};
  }
  .sideLeft {
    p {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.FONT};
    }
    .logo {
      gap: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .sideRight {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    h1 {
      text-align: center;
    }
  }
`;
