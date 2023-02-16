import Image from "next/image";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <Image src="/logo.svg" width={134} height={98} alt="" />

        <p>
          Developed with <span>&hearts;</span> by{" "}
          <a href="https://ramontrovao.tech/">Ramon Pinheiro</a> | Designed by{" "}
          <a href="https://nyousefali.com.br/">Násser Yousef</a>
        </p>
      </div>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ramon-pinheiro/" target="_blank">
            <LinkedinLogo size={35} />
          </a>
        </li>

        <li>
          <a href="https://github.com/ramontrovao" target="_blank">
            <GithubLogo size={35} />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}
