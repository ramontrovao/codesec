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
    gap: 2rem;
    padding: 5rem 1rem;
  }
`;

export const Profile = styled.div`
  ${({ theme: { colors } }) => css`
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
  `}
`;

export const InstructorInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
