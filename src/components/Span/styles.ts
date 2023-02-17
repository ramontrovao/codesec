import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface SpanProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
}

export const Span = styled.span<SpanProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};
  `}
`;
