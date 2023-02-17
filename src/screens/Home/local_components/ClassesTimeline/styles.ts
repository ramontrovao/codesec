import styled, { css } from "styled-components";

export const ClassesTimelineSection = styled.section`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5rem 3.5rem;

    a {
      padding: 1rem;
      border: 0;
      border-radius: 4px;

      background: ${colors["brand-red"]};
      box-shadow: #e83752 0px 0px 25px;
      color: ${colors["white100"]};
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.4s;
      text-decoration: none;

      &:hover {
        background: ${colors["brand-red-dark"]};
      }
    }

    @media (max-width: 768px) {
      padding: 5rem 0;
    }
  `}
`;

export const Classes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  padding: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
