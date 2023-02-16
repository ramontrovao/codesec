import { ButtonBrandRed } from "@/components/ButtonBrandRed";
import Image from "next/image";
import {
  LearnWebhackingSection,
  LeftWrapper,
  LeftWrapperTitle,
} from "./styles";

export function LearnWebhacking() {
  return (
    <LearnWebhackingSection>
      <LeftWrapper>
        <LeftWrapperTitle>
          <span>PARTICIPE</span>

          <h2>Aprenda Webhacking</h2>
        </LeftWrapperTitle>

        <p>
          Cadastre-se e garanta um aprendizado de qualidade sobre webhacking com
          personalidades de renome. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim expedita maiores obcaecati adipisci quidem
          mollitia praesentium in eaque eligendi officiis.
        </p>

        <ButtonBrandRed text="QUERO ME CADASTRAR" />
      </LeftWrapper>

      <Image src="/mobile-preview.svg" width={270} height={560} alt="" />
    </LearnWebhackingSection>
  );
}
