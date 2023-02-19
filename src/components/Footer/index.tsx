import Image from "next/image";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Anchor } from "../Anchor/styles";
import { Paragraph } from "../Paragraph/styles";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <a href="#intro">
          <Image src="/logo.svg" width={134} height={98} alt="" />
        </a>

        <Paragraph
          colorVariant="gray200"
          fontVariant="medium-md"
          align="center"
        >
          Developed with <span>&hearts;</span> by{" "}
          <Anchor
            colorVariant="brand-red"
            fontVariant="medium-md"
            underline={true}
            href="https://ramontrovao.tech/"
          >
            Ramon Pinheiro
          </Anchor>{" "}
          | Designed by{" "}
          <Anchor
            colorVariant="brand-red"
            fontVariant="medium-md"
            underline={true}
            href="https://nyousefali.com.br/"
          >
            Násser Yousef
          </Anchor>
        </Paragraph>
      </div>

      <ul>
        <li>
          <Anchor
            colorVariant="brand-red"
            fontVariant="medium-md"
            underline={false}
            href="https://www.linkedin.com/in/ramon-pinheiro/"
            target="_blank"
          >
            <LinkedinLogo size={35} />
          </Anchor>
        </li>

        <li>
          <Anchor
            colorVariant="brand-red"
            fontVariant="medium-md"
            underline={false}
            href="https://github.com/ramontrovao"
            target="_blank"
          >
            <GithubLogo size={35} />
          </Anchor>
        </li>
      </ul>
    </FooterContainer>
  );
}
