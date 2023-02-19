import { AnchorButtonStyled } from "@/components/Anchor/styles";
import { Title } from "@/components/SectionTitle/styles";
import Image from "next/image";
import { SubscribeNowForm, SubscribeNowSection } from "./styles";

export function SubscribeNow() {
  return (
    <SubscribeNowSection>
      <Image src="/hacker.svg" width={592} height={798} alt="" />

      <div>
        <Image src="/logo.svg" width={134} height={98} alt="" />

        <Title position="center" titleCustomSize="large-sm-mobile">
          <span>CADASTRE-SE</span>
          <h2>Entre agora mesmo para a lista de espera</h2>
        </Title>

        <SubscribeNowForm>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu melhor e-mail" />

          <AnchorButtonStyled href="#intro">
            QUERO ME CADASTRAR
          </AnchorButtonStyled>
        </SubscribeNowForm>
      </div>
    </SubscribeNowSection>
  );
}
