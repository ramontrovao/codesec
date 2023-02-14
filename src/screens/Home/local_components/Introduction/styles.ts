import styled, { css } from "styled-components";

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  min-height: 100vh;
  background-size: cover;
  background-image: url("./bgintro.svg");
  padding: 3.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 2rem;
  }
`;

export const LeftWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 1rem;

    span,
    a {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      font-size: ${fontSizes["medium-md"]};
      color: ${colors["brand-red"]};
      font-weight: bold;

      div {
        color: ${colors["white100"]};
        background: ${colors["brand-red"]};
        line-height: 0;

        padding: 0.25rem;
        border-radius: 999px;
      }
    }

    h1 {
      font-size: ${fontSizes["large-sm"]};
      color: ${colors["white100"]};
      line-height: 0.95;

      @media (max-width: 768px) {
        font-size: ${fontSizes["large-sm-mobile"]};
      }
    }

    p {
      font-size: ${fontSizes["medium-md"]};
      color: ${colors["gray300"]};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;

export const RightWrapper = styled.div`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;

    gap: 2rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;

      div,
      button {
        width: 100%;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 4rem;
        padding-left: 1rem;
        width: 100%;

        background: ${colors["gray700"]};
        border: 1px solid transparent;

        svg {
          color: ${colors["brand-red"]};
          margin-right: 0.5rem;
        }

        &:hover {
          border: 1px solid ${colors["brand-red"]};
        }
      }

      input {
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        border-radius: 4px;

        color: ${colors["white100"]};
        font-size: 1rem;
        background: transparent;
      }

      button {
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

        &:hover {
          background: ${colors["brand-red-dark"]};
        }
      }
    }

    span {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      font-size: ${fontSizes["medium-md"]};
      color: ${colors["brand-red"]};
      font-weight: bold;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;
