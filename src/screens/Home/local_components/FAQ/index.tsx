import { Question } from "./local_components/Question";
import { FAQSection, FAQTitle, QuestionsContainer } from "./styles";

const frequentQuestions = [
  {
    id: 1,
    title: "O acesso é vitalício?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
  {
    id: 2,
    title: "Por onde eu recebo o acesso?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
  {
    id: 3,
    title: "Como faço para cancelar?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
  {
    id: 4,
    title: "Tem opção de parcelamento?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
  {
    id: 5,
    title: "O curso serve para iniciantes?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
  {
    id: 6,
    title: "Existe algum período grátis para experimentação?",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sodales sem. Cras laoreet iaculis sem ut vestibulum. Fusce quis lacinia eros. Maecenas et mollis.",
  },
];

export function FAQ() {
  return (
    <FAQSection>
      <FAQTitle>
        <span>FAQ</span>

        <h2>Pergunta frequentes</h2>
      </FAQTitle>

      <QuestionsContainer>
        {frequentQuestions.map(({ title, question, id }) => (
          <Question title={title} question={question} key={id} />
        ))}
      </QuestionsContainer>
    </FAQSection>
  );
}
