import styled from "styled-components";

export const ClassesTimelineSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 3.5rem;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
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
