import styled, { css } from "styled-components";
import { Title } from "../ClassesTimeline/styles";

export const FeedbacksSection = styled.section`
  padding: 5rem 7rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const FeedbackTitle = styled(Title)`
  align-items: flex-start;

  h2 {
    text-align: left;
  }
`;

export const FeedbacksContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;

  margin-top: 2.5rem;
`;

export const CustomersWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const CustomersInfosSection = styled.section`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 2rem;

      img {
        border-radius: 999px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        strong {
          color: ${colors["brand-red-dark"]};
          font-size: 1.25rem;
        }

        span {
          color: ${colors["gray200"]};
          font-size: ${fontSizes["medium-md"]};
        }
      }
    }
  `}
`;

export const FeedbackParagraphContainer = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 45%;

    p {
      color: ${colors["white100"]};
      font-size: ${fontSizes["medium-md"]};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    align-self: flex-end;
    display: flex;
    gap: 0.5rem;

    button {
      line-height: 0;
      padding: 0.5rem;

      border: 0;
      border-radius: 999px;
      background: ${colors["brand-red"]};
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: ${colors["brand-red-dark"]};
      }
    }
  `}
`;