import styled, { css } from "styled-components";

export const AdvantageSection = styled.section`
  ${({ theme: { colors, fontSizes } }) => css`
    min-height: 25vh;
    padding: 5rem 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.75rem;

      p {
        font-size: ${fontSizes["medium-md"]};
        color: ${colors["gray100"]};
        width: 80%;
        text-align: center;
      }
    }
  `}
`;
