import styled, { css } from "styled-components";

interface IconCircleContainerProps {
  variant: "black" | "white";
  padding: number;
}

export const IconCircleContainer = styled.div<IconCircleContainerProps>`
  ${({ theme: { colors }, variant, padding }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${colors["brand-red"]};
    color: ${variant === "white" ? colors["white100"] : colors["gray700"]};
    padding: ${`${padding / 16}rem`};
    border-radius: 999px;
  `}
`;
