import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    padding: 2rem 7rem;

    a,
    span {
      color: ${colors["brand-red"]};
      transition: color 0.4s;

      &:hover {
        color: ${colors["brand-red-dark"]};
      }
    }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        p {
          text-align: center;

          color: ${colors["gray200"]};
          font-size: ${fontSizes["medium-md"]};
        }
      }
    }

    ul {
      display: flex;
      gap: 1rem;

      a {
        color: ${colors["brand-red"]};
      }
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
  `}
`;
