import { Eye } from "phosphor-react";
import {
  BottomWrapper,
  HowItWorksSection,
  Steps,
  TopContainer,
  TopLeftWrapper,
  TopMiddleWrapper,
  TopRightWrapper,
} from "./styles";

export function HowItWorks() {
  return (
    <HowItWorksSection>
      <TopContainer>
        <TopLeftWrapper>
          <span>VANTAGENS</span>

          <h2>Como funciona a Websérie?</h2>
        </TopLeftWrapper>

        <TopMiddleWrapper>
          <div></div>
          <div></div>
        </TopMiddleWrapper>

        <TopRightWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae
            velit fuga quibusdam nostrum. Cum maxime iure ipsum tempore
            consequuntur?
          </p>
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
            <strong>Passo 1</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </p>
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
            <strong>Passo 1</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </p>
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
            <strong>Passo 1</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quae
              sunt, at exercitationem similique sequi aspernatur est impedit!
            </p>
          </main>
        </Steps>
      </BottomWrapper>
    </HowItWorksSection>
  );
}
