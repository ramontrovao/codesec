import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import { QuestionContainer } from "./styles";
import { motion } from "framer-motion";
import { Strong } from "@/components/Strong/styles";
import { Paragraph } from "@/components/Paragraph/styles";

interface QuestionProps {
  title: string;
  question: string;
  key: number;
}

export function Question({ title, question }: QuestionProps) {
  const [isActive, setIsActive] = useState(false);
  const ParagraphMotion = motion(Paragraph);

  return (
    <QuestionContainer isActive={isActive}>
      <header>
        <Strong colorVariant="white100" fontVariant="medium-strong">
          {title}
        </Strong>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </button>
      </header>

      {isActive && (
        <main>
          <ParagraphMotion
            colorVariant="gray200"
            fontVariant="medium-md"
            align="left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {question}
          </ParagraphMotion>
        </main>
      )}
    </QuestionContainer>
  );
}
