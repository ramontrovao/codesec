import { ButtonBrandRedContainer } from "./styles";

interface ButtonBrandRedProps {
  text: string;
}

export function ButtonBrandRed({ text }: ButtonBrandRedProps) {
  return <ButtonBrandRedContainer>{text}</ButtonBrandRedContainer>;
}
