import styled from "styled-components";

export const ClockSection = styled.section`
  min-height: 85vh;
  padding: 0 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ClockContainer = styled.div`
  width: 100%;
  min-height: 15rem;
  padding: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: linear-gradient(225.05deg, #e83752 0%, rgba(232, 55, 82, 0) 100%);

  div {
    display: flex;
    justify-content: space-around;
    width: 35%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;

    div {
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;
