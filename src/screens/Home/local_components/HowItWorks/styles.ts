import styled, { css } from "styled-components";

export const HowItWorksSection = styled.section`
  padding: 5rem 7.5rem;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const TopMiddleWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;

    div:first-child {
      width: 2rem;
      height: 2rem;
      border-radius: 8px;

      background: ${colors["brand-red"]};
      animation: infinite circleLeftAnimation 20s;
    }

    div:last-child {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 8px;
      margin-top: -2rem;

      background: ${colors["brand-red"]};
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      animation: infinite circleRightAnimation 10s;
    }

    @keyframes circleLeftAnimation {
      0% {
        transform: translateX(45px);
        transform: translateY(0);
      }

      50% {
        transform: translateX(-100px);
        transform: translateY(0);
      }

      75% {
        transform: translateX(-100px);
        transform: translateY(-32px);
      }

      100% {
        transform: translateX(45px);
        transform: translateY(0);
      }
    }

    @keyframes circleRightAnimation {
      0% {
        transform: translateX(0);
        transform: translateY(0);
      }

      50% {
        transform: translateY(32px);
        transform: translateX(-25px);
      }

      75% {
        transform: translateX(-15px);
        transform: translateY(32px);
      }

      100% {
        transform: translateX(0);
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

export const TopRightWrapper = styled.div`
  max-width: 22.25rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BottomWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Steps = styled.div`
  ${({ theme: { colors } }) => css`
    min-height: 20rem;
    padding: 1rem;

    border: 1px solid ${colors["red500"]};
    border-radius: 4px;

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7.5rem;
      position: relative;

      div:first-child {
        position: relative;
        z-index: 2;
        padding: 1rem;
        border-radius: 999px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${colors["brand-red"]};

        svg {
          color: ${colors["white100"]};
        }
      }

      div:last-child {
        height: 0.15rem;
        width: 100%;

        position: absolute;
        z-index: 1;

        background: linear-gradient(
          90deg,
          rgba(10, 10, 10, 1) 0%,
          rgba(241, 71, 97, 1) 46%,
          rgba(10, 10, 10, 1) 90%
        );
        border-radius: 999px;
      }
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  `}
`;
