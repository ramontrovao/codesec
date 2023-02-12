import Image from "next/image";
import { At, Eye, Key, User, WarningCircle } from "phosphor-react";
import { IntroductionSection, LeftWrapper, RightWrapper } from "./styles";

export function Introduction() {
  return (
    <IntroductionSection>
      <LeftWrapper>
        <span>
          <div>
            <Key size={20} />
          </div>
          WEBINAR 100% GRATUITO
        </span>
        <h1>Aprenda Web hacking do zero ao avançado</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          fugit! Quia tempora magni dolore eos.
        </p>
        <a>
          <div>
            <Eye size={20} />
          </div>
          Leia mais
        </a>
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

          <button>QUERO ME CADASTRAR</button>
        </form>

        <span>
          <WarningCircle size={25} /> O ACESSO SERÁ ENVIADO EM SEU E-MAIL
        </span>
      </RightWrapper>
    </IntroductionSection>
  );
}
