import { Button } from "@/components/Button/styles";
import { Title } from "@/components/SectionTitle/styles";
import Image from "next/image";
import { LearnWebhackingSection, LeftWrapper } from "./styles";

export function LearnWebhacking() {
  return (
    <LearnWebhackingSection>
      <LeftWrapper>
        <Title position="left">
          <span>PARTICIPE</span>

          <h2>Aprenda Webhacking</h2>
        </Title>

        <p>
          Cadastre-se e garanta um aprendizado de qualidade sobre webhacking com
          personalidades de renome. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim expedita maiores obcaecati adipisci quidem
          mollitia praesentium in eaque eligendi officiis.
        </p>

        <Button>QUERO ME CADASTRAR</Button>
      </LeftWrapper>

      <Image src="/mobile-preview.svg" width={270} height={560} alt="" />
    </LearnWebhackingSection>
  );
}
