import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import { QuestionContainer } from "./styles";
import { motion } from "framer-motion";

interface QuestionProps {
  title: string;
  question: string;
  key: number;
}

export function Question({ title, question }: QuestionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <QuestionContainer isActive={isActive}>
      <header>
        <strong>{title}</strong>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <CaretUp size={20} /> : <CaretDown size={20} />}
        </button>
      </header>

      {isActive && (
        <main>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {question}
          </motion.p>
        </main>
      )}
    </QuestionContainer>
  );
}
