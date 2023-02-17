import styled, { css } from "styled-components";

export const WhoIsTheInstructorSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InstructorInfosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 7rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 5rem 1rem;
  }
`;

export const Profile = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    div:first-child {
      img {
        border-radius: 999px;
        border: 2px solid ${colors["brand-red"]};
      }
    }

    strong {
      font-size: ${fontSizes["medium-lg"]};
      color: ${colors["white100"]};
    }
  `}
`;

export const InstructorInfos = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    width: 50%;

    p {
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["gray200"]};
      margin-bottom: 1rem;
    }

    a {
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["brand-red"]};
      text-decoration: none;
      transition: color 0.4s;

      &:hover {
        color: ${colors["brand-red-dark"]};
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;
