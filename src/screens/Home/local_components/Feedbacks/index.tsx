import Image from "next/image";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  ButtonsWrapper,
  CustomersInfosSection,
  CustomersWrapper,
  FeedbackParagraphContainer,
  FeedbacksContent,
  FeedbacksSection,
  FeedbackTitle,
} from "./styles";

type customerInfosType = {
  id: number;
  costumerName: string;
  costumerVocation: string;
  costumerState: string;
  costumerFeedback: string;
};

const customersInfos: customerInfosType[] = [
  {
    id: 1,
    costumerName: "Ramon Pinheiro",
    costumerVocation: "Programador",
    costumerState: "Espírito Santo",
    costumerFeedback:
      "Ramon ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    costumerName: "Victor Jansen",
    costumerVocation: "Empresário",
    costumerState: "Espírito Santo",
    costumerFeedback:
      "Victor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    costumerName: "Levi Eber",
    costumerVocation: "Balconista",
    costumerState: "Distrito Federal",
    costumerFeedback:
      "Levi ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export function Feedbacks() {
  const [currentActiveCustomer, setCurrentActiveCustomer] = useState(0);

  function handleActivePreviousFeedback() {
    if (currentActiveCustomer > 0) {
      setCurrentActiveCustomer((prev) => prev - 1);
    }
  }

  function handleActiveNextFeedback() {
    if (currentActiveCustomer < customersInfos.length - 1) {
      setCurrentActiveCustomer((prev) => prev + 1);
    }
  }

  return (
    <FeedbacksSection>
      <FeedbackTitle>
        <span>DEPOIMENTOS</span>
        <h2>O que estão dizendo sobre a Websérie</h2>
      </FeedbackTitle>

      <FeedbacksContent>
        <CustomersWrapper>
          <CustomersInfosSection>
            {customersInfos.map(
              ({ costumerName, costumerState, costumerVocation, id }) => (
                <div key={id}>
                  <Image
                    src="/doguinhofofo.jpg"
                    width={72}
                    height={72}
                    alt=""
                  />

                  <div>
                    <strong>{costumerName}</strong>
                    <span>{costumerVocation}</span>
                    <span>{costumerState}</span>
                  </div>
                </div>
              )
            )}
          </CustomersInfosSection>

          <FeedbackParagraphContainer>
            <Image src="/quotation.svg" width={24} height={24} alt="" />

            <p>{customersInfos[currentActiveCustomer].costumerFeedback}</p>

            <ButtonsWrapper>
              <button onClick={handleActivePreviousFeedback}>
                <ArrowLeft size={25} />
              </button>
              <button onClick={handleActiveNextFeedback}>
                <ArrowRight size={25} />
              </button>
            </ButtonsWrapper>
          </FeedbackParagraphContainer>
        </CustomersWrapper>
      </FeedbacksContent>
    </FeedbacksSection>
  );
}
