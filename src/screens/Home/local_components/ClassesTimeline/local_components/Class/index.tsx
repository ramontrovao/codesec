import { MagnifyingGlass } from "phosphor-react";
import {
  LeftWrapper,
  MiddleWrapper,
  RightClassContainer,
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
    <RightClassContainer contentDirection={contentDirection}>
      <LeftWrapper>
        <strong>{classDate}</strong>

        <span>{classDateDescription}</span>
      </LeftWrapper>

      <MiddleWrapper>
        <MagnifyingGlass size={25} />
      </MiddleWrapper>

      <RightWrapper>
        <div>
          <strong>AULA {classNumber}</strong>
        </div>

        <h3>{classTitle}</h3>

        <p>{classResume}</p>
      </RightWrapper>
    </RightClassContainer>
  );
}
