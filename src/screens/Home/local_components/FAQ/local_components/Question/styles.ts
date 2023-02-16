import styled, { css } from "styled-components";

interface QuestionContainerProps {
  isActive: boolean;
}

export const QuestionContainer = styled.div<QuestionContainerProps>`
  ${({ theme: { colors, fontSizes }, isActive }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;

    background: #121111;

    strong,
    p {
      color: ${colors["white100"]};
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        display: flex;
        align-items: center;

        padding: 0.25rem;
        border: 0;
        border-radius: 4px;

        color: ${isActive ? colors["brand-red"] : colors["white100"]};
        background-color: ${colors["gray500"]};
        transition: color 0.2s;

        cursor: pointer;

        &:hover {
          color: ${colors["brand-red-dark"]};
        }
      }
    }
  `}
`;
