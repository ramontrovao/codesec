import { Paragraph } from "@/components/Paragraph/styles";
import { TitleH2 } from "@/components/TitleH2/styles";
import Image from "next/image";
import { Fingerprint, Key, LockKeyOpen, MagnifyingGlass } from "phosphor-react";
import { LeftWrapper } from "./styles";
import { AboutSection } from "./styles";

export function About() {
  return (
    <AboutSection>
      <LeftWrapper>
        <span>INFOS</span>

        <TitleH2 colorVariant="white100" fontVariant="large-sm">
          Sobre a Websérie
        </TitleH2>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          Aprenda PHP do Jeito Certo Utilizando 100% de Tecnologia Moderna e os
          Melhores Padrões de Projeto Nessa Webserie 100% Online e GRATUITA
        </Paragraph>

        <ul>
          <li>
            <div>
              <MagnifyingGlass size={20} />
            </div>
            Descobrindo o Webhacking
          </li>
          <li>
            <div>
              <LockKeyOpen size={20} />
            </div>
            Hackeando tudo
          </li>
          <li>
            <div>
              <Fingerprint size={20} />
            </div>
            Cybersecurity
          </li>
          <li>
            <div>
              <Key size={20} />
            </div>
            Criptografia
          </li>
        </ul>
      </LeftWrapper>

      <div>
        <Image src="./codesecencrypt.svg" alt="" width={300} height={300} />
      </div>
    </AboutSection>
  );
}
