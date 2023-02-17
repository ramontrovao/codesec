import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface TitleProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
}

export const TitleH2 = styled.h2<TitleProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};
  `}
`;
