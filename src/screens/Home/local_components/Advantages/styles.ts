import styled, { css } from "styled-components";

export const AdvantageSection = styled.section`
  ${({ theme: { colors, fontSizes } }) => css`
    min-height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.75rem;

      div {
        background: ${colors["brand-red"]};
        color: ${colors["white100"]};
        padding: 0.75rem;
        border-radius: 999px;
      }

      p {
        font-size: ${fontSizes["medium-md"]};
        color: ${colors["gray100"]};
        width: 80%;
        text-align: center;
      }
    }
  `}
`;
