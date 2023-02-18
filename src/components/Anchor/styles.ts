import styled, { css } from "styled-components";

export const AnchorButtonStyled = styled.a`
  ${({ theme: { colors, fontSizes } }) => css`
    text-align: center;

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
    text-decoration: none;

    &:hover {
      background: ${colors["brand-red-dark"]};
    }
  `}
`;
