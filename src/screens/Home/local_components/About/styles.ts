import styled, { css } from "styled-components";

export const AboutSection = styled.section`
  min-height: 75vh;
  padding: 10rem 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-image: url("./bgabout.svg");
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const LeftWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 60%;

    p {
      color: ${colors["gray200"]};
      font-size: ${fontSizes["medium-md"]};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: ${colors["white100"]};
        font-size: ${fontSizes["medium-md"]};
        font-weight: bold;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${colors["brand-red"]};
          padding: 0.5rem;
          border-radius: 999px;
        }
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;

export const RightWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
