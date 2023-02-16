import Image from "next/image";
import { SubscribeNowForm, SubscribeNowSection } from "./styles";

export function SubscribeNow() {
  return (
    <SubscribeNowSection>
      <Image src="/hacker.svg" width={592} height={798} alt="" />

      <div>
        <Image src="/logo.svg" width={134} height={98} alt="" />

        <div>
          <span>CADASTRE-SE</span>
          <strong>Entre agora mesmo para a lista de espera</strong>
        </div>

        <SubscribeNowForm>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu melhor e-mail" />

          <button>QUERO ME CADASTRAR</button>
        </SubscribeNowForm>
      </div>
    </SubscribeNowSection>
  );
}
