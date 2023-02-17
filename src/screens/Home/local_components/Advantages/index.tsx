import { IconCircleContainer } from "@/components/IconCircle/styles";
import { Paragraph } from "@/components/Paragraph/styles";
import { Calendar, Download, Medal, Monitor, PencilLine } from "phosphor-react";
import { AdvantageSection } from "./styles";

export function Advantages() {
  return (
    <AdvantageSection>
      <div>
        <IconCircleContainer padding={12} variant="white">
          <Calendar size={25} />
        </IconCircleContainer>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          14 há 17 de setembro
        </Paragraph>
      </div>

      <div>
        <IconCircleContainer padding={12} variant="white">
          <Monitor size={25} />
        </IconCircleContainer>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          100% online e gratuito
        </Paragraph>
      </div>

      <div>
        <IconCircleContainer padding={12} variant="white">
          <PencilLine size={25} />
        </IconCircleContainer>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          Aulas práticas
        </Paragraph>
      </div>

      <div>
        <IconCircleContainer padding={12} variant="white">
          <Medal size={25} />
        </IconCircleContainer>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          Exclusividade no mercado
        </Paragraph>
      </div>

      <div>
        <IconCircleContainer padding={12} variant="white">
          <Download size={25} />
        </IconCircleContainer>

        <Paragraph colorVariant="gray200" fontVariant="medium-md">
          Download das aulas
        </Paragraph>
      </div>
    </AdvantageSection>
  );
}
