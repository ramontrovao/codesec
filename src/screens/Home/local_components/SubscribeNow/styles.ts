import styled, { css } from "styled-components";

export const SubscribeNowSection = styled.section`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 7rem;

    div {
      margin-top: -6rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        margin-top: 1rem;

        span {
          color: ${colors["brand-red"]};
          font-size: ${fontSizes["medium-md"]};
          letter-spacing: 0.15rem;
          font-weight: bold;
        }

        strong {
          color: ${colors["white100"]};
          font-size: ${fontSizes["medium-lg"]};
          font-weight: bold;
        }
      }

      padding: 2rem 0;
    }

    @media (max-width: 768px) {
      img {
        width: 100%;
      }

      padding: 0 1rem;
    }
  `}
`;

export const SubscribeNowForm = styled.form`
  ${({ theme: { colors, fontSizes } }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    input,
    button {
      width: 100%;
    }

    input {
      height: 4rem;
      padding: 1rem;
      border-radius: 4px;
      outline: 0;

      font-size: 1rem;
      color: ${colors["white100"]};
      background: ${colors["gray700"]};
      border: 1px solid ${colors["brand-red"]};
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
  `}
`;