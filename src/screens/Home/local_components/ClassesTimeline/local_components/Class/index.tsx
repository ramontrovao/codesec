import { Paragraph } from "@/components/Paragraph/styles";
import { Span } from "@/components/Span/styles";
import { Strong } from "@/components/Strong/styles";
import { TitleH3 } from "@/components/TitleH3/styles";
import { MagnifyingGlass } from "phosphor-react";
import {
  ClassContainer,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
} from "./styles";

interface ClassProps {
  classDate: string;
  classDateDescription: string;
  classNumber: number;
  classTitle: string;
  classResume: string;
  contentDirection: "left" | "right";
}

export function Class({
  classDate,
  classDateDescription,
  classNumber,
  classTitle,
  classResume,
  contentDirection,
}: ClassProps) {
  return (
    <ClassContainer contentDirection={contentDirection}>
      <LeftWrapper>
        <Strong fontVariant="large-sm" colorVariant="white100">
          {classDate}
        </Strong>

        <Span fontVariant="medium-md" colorVariant="brand-red">
          {classDateDescription}
        </Span>
      </LeftWrapper>

      <MiddleWrapper>
        <MagnifyingGlass size={25} />
      </MiddleWrapper>

      <RightWrapper>
        <div>
          <strong>AULA {classNumber}</strong>
        </div>

        <TitleH3 fontVariant="medium-lg" colorVariant="white100">
          {classTitle}
        </TitleH3>

        <Paragraph fontVariant="medium-md" colorVariant="gray200" align="left">
          {classResume}
        </Paragraph>
      </RightWrapper>
    </ClassContainer>
  );
}
