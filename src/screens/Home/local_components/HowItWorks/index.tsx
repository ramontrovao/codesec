import { Paragraph } from "@/components/Paragraph/styles";
import { Title } from "@/components/SectionTitle/styles";
import { Strong } from "@/components/Strong/styles";
import { Eye } from "phosphor-react";
import {
  BottomWrapper,
  HowItWorksSection,
  Steps,
  TopContainer,
  TopMiddleWrapper,
  TopRightWrapper,
} from "./styles";

export function HowItWorks() {
  return (
    <HowItWorksSection>
      <TopContainer>
        <Title position="left">
          <span>VANTAGENS</span>

          <h2>Como funciona a Websérie?</h2>
        </Title>

        <TopMiddleWrapper>
          <div></div>
          <div></div>
        </TopMiddleWrapper>

        <TopRightWrapper>
          <Paragraph
            fontVariant="medium-md"
            colorVariant="gray200"
            align="left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae
            velit fuga quibusdam nostrum. Cum maxime iure ipsum tempore
            consequuntur?
          </Paragraph>
        </TopRightWrapper>
      </TopContainer>

      <BottomWrapper>
        <Steps>
          <header>
            <div>
              <Eye size={25} />
            </div>
            <div></div>
          </header>

          <main>
            <Strong colorVariant="white100" fontVariant="medium-lg">
              Passo 1
            </Strong>

            <Paragraph colorVariant="gray200" fontVariant="medium-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </Paragraph>
          </main>
        </Steps>

        <Steps>
          <header>
            <div>
              <Eye size={25} />
            </div>
            <div></div>
          </header>

          <main>
            <Strong colorVariant="white100" fontVariant="medium-lg">
              Passo 1
            </Strong>

            <Paragraph colorVariant="gray200" fontVariant="medium-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </Paragraph>
          </main>
        </Steps>

        <Steps>
          <header>
            <div>
              <Eye size={25} />
            </div>
            <div></div>
          </header>

          <main>
            <Strong colorVariant="white100" fontVariant="medium-lg">
              Passo 1
            </Strong>

            <Paragraph colorVariant="gray200" fontVariant="medium-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </Paragraph>
          </main>
        </Steps>
      </BottomWrapper>
    </HowItWorksSection>
  );
}
