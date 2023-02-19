import { FontType } from "@/@types/styled";
import styled, { css } from "styled-components";

interface TitleProps {
  position: "left" | "center";
  titleCustomSize?: keyof FontType;
}

export const Title = styled.div<TitleProps>`
  ${({ theme: { colors, fontSizes }, position, titleCustomSize }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: ${position === "center" ? "center" : "left"};

    span {
      color: ${colors["brand-red"]};
      font-size: ${fontSizes["medium-md"]};
      letter-spacing: 0.15rem;
      font-weight: bold;
    }

    h2 {
      color: ${colors["white100"]};
      font-size: ${titleCustomSize
        ? fontSizes[titleCustomSize]
        : fontSizes["large-sm"]};
      text-align: ${position === "center" ? "center" : "flex-start"};

      @media (max-width: 768px) {
        font-size: ${fontSizes["large-sm-mobile"]};
      }
    }
  `}
`;
