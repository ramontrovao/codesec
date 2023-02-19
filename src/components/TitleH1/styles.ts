import { ColorsType, FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface TitleProps {
  colorVariant: keyof ColorsType;
  fontVariant: keyof FontType;
}

export const TitleH1 = styled.h1<TitleProps>`
  ${({ theme: { colors, fontSizes }, colorVariant, fontVariant }) => css`
    font-size: ${fontSizes[fontVariant]};
    color: ${colors[colorVariant]};

    @media (max-width: 768px) {
      font-size: ${fontSizes["large-sm-mobile"]};
    }
  `}
`;
