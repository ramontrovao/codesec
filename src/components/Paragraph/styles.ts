import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface ParagraphProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
  align?: "left" | "center" | "right";
}

export const Paragraph = styled.p<ParagraphProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant, align }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};
    text-align: ${align ? align : "center"};
  `}
`;
