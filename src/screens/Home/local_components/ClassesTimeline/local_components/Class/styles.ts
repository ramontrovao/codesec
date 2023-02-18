import styled, { css } from "styled-components";

interface RightClassContainerProps {
  contentDirection: "left" | "right";
}

export const ClassContainer = styled.div<RightClassContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.contentDirection === "right" ? "row" : "row-reverse"};
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${fontSizes["large-sm"]};
      color: ${colors["white100"]};
    }

    span {
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["brand-red"]};
      font-weight: bold;
      letter-spacing: 0.15rem;
    }
  `}
`;

export const MiddleWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors["brand-red"]};
    padding: 1rem;
    border-radius: 999px;

    svg {
      color: ${colors["white100"]};
    }
  `}
`;

export const RightWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 50rem;
    padding: 2rem;

    border: 2px solid ${colors["red400"]};
    border-radius: 4px;

    div {
      ${({ theme: { colors, fontSizes } }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        max-width: 7rem;
        padding: 0.5rem 0.25rem;
        border-radius: 4px;

        background: linear-gradient(243.46deg, #fa5770 16.66%, #e83752 83.34%);

        strong {
          font-size: ${fontSizes["medium-md"]};
          color: ${colors["gray700"]};
          font-weight: bold;
          letter-spacing: 0.15rem;
        }
      `}
    }

    h3 {
      font-size: ${fontSizes["medium-lg"]};
      color: ${colors["white100"]};
    }

    p {
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["gray200"]};
    }
  `}
`;
