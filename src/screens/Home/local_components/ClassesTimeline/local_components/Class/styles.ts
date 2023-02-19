import styled, { css } from "styled-components";

interface RightClassContainerProps {
  contentDirection: "left" | "right";
}

export const ClassContainer = styled.div<RightClassContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ contentDirection }) =>
    contentDirection === "right" ? "row" : "row-reverse"};
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 50rem;
    padding: 2rem;

    border: 2px solid ${colors["red400"]};
    border-radius: 4px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      max-width: 7rem;
      padding: 0.5rem 0.25rem;
      border-radius: 4px;

      background: linear-gradient(243.46deg, #fa5770 16.66%, #e83752 83.34%);

      strong {
        font-weight: bold;
        letter-spacing: 0.15rem;
      }
    }
  `}
`;
