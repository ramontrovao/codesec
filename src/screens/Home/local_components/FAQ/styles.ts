import styled from "styled-components";

export const FAQSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 7rem;

  > div {
    position: sticky;
    top: 0;
    padding-top: 2rem;

    @media (max-width: 768px) {
      position: static;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-wrap: wrap;
  }
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  min-width: 75%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;
