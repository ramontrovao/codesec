import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface ParagraphProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
}

export const Paragraph = styled.p<ParagraphProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};
  `}
`;
