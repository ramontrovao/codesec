import styled, { css } from "styled-components";

export const SubscribeNowSection = styled.section`
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
    }

    padding: 2rem 0;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }

    padding: 0 1rem;
  }
`;

export const SubscribeNowForm = styled.form`
  ${({ theme: { colors } }) => css`
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
  `}
`;
