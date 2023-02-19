import { AnchorButtonStyled } from "@/components/Anchor/styles";
import { Paragraph } from "@/components/Paragraph/styles";
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

        <Paragraph colorVariant="gray200" fontVariant="medium-md" align="left">
          Cadastre-se e garanta um aprendizado de qualidade sobre webhacking com
          personalidades de renome. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim expedita maiores obcaecati adipisci quidem
          mollitia praesentium in eaque eligendi officiis.
        </Paragraph>

        <AnchorButtonStyled href="#intro">
          QUERO ME CADASTRAR
        </AnchorButtonStyled>
      </LeftWrapper>

      <Image src="/mobile-preview.svg" width={270} height={560} alt="" />
    </LearnWebhackingSection>
  );
}
