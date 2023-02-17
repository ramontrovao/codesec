import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface StrongProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
}

export const Strong = styled.strong<StrongProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};
  `}
`;
