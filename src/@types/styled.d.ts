import "styled-components";
import { DefaultTheme } from "@/styles/themes/DefaultTheme";

type ThemeType = typeof DefaultTheme;
export type ColorsType = typeof DefaultTheme.colors;
export type FontType = typeof DefaultTheme.fontSizes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
