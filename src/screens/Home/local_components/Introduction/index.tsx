import { Anchor, AnchorButtonStyled } from "@/components/Anchor/styles";
import { IconCircleContainer } from "@/components/IconCircle/styles";
import { Paragraph } from "@/components/Paragraph/styles";
import { Span } from "@/components/Span/styles";
import { TitleH1 } from "@/components/TitleH1/styles";
import Image from "next/image";
import { At, Eye, Key, User, WarningCircle } from "phosphor-react";
import { IntroductionSection, LeftWrapper, RightWrapper } from "./styles";

export function Introduction() {
  return (
    <IntroductionSection>
      <LeftWrapper>
        <Span colorVariant="brand-red" fontVariant="medium-md">
          <IconCircleContainer padding={5} variant="white">
            <Key size={20} />
          </IconCircleContainer>
          WEBINAR 100% GRATUITO
        </Span>
        <TitleH1 fontVariant="large-sm" colorVariant="white100">
          Aprenda Web hacking do zero ao avançado
        </TitleH1>
        <Paragraph colorVariant="gray200" fontVariant="medium-md" align="left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          fugit! Quia tempora magni dolore eos.
        </Paragraph>
        <Anchor
          fontVariant="medium-md"
          colorVariant="brand-red"
          underline={false}
          href="#about"
        >
          <IconCircleContainer padding={5} variant="white">
            <Eye size={20} />
          </IconCircleContainer>
          Leia mais
        </Anchor>
      </LeftWrapper>

      <RightWrapper>
        <Image src="./logo.svg" width={134} height={98} alt="" />

        <form>
          <div>
            <User size={25} />
            <input type="text" placeholder="Seu nome" />
          </div>
          <div>
            <At size={25} />
            <input type="email" placeholder="Seu melhor e-mail" />
          </div>

          <AnchorButtonStyled>QUERO ME CADASTRAR</AnchorButtonStyled>
        </form>

        <Span colorVariant="brand-red" fontVariant="medium-md">
          <WarningCircle size={25} /> O ACESSO SERÁ ENVIADO EM SEU E-MAIL
        </Span>
      </RightWrapper>
    </IntroductionSection>
  );
}
