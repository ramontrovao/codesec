import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    padding: 2rem 7rem;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }

    ul {
      display: flex;
      gap: 1rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
  `}
`;
