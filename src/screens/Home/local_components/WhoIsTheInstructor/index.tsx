import { Title } from "@/components/SectionTitle/styles";
import Image from "next/image";
import {
  InstructorInfos,
  InstructorInfosWrapper,
  Profile,
  WhoIsTheInstructorSection,
} from "./styles";

export function WhoIsTheInstructor() {
  return (
    <WhoIsTheInstructorSection>
      <Title position="center">
        <span>SEU MENTOR</span>
        <h2>Quem é o instrutor?</h2>
      </Title>

      <InstructorInfosWrapper>
        <Profile>
          <div>
            <Image src="/doguinhofofo.jpg" width={180} height={180} alt="" />
          </div>

          <strong>Ramon Pinheiro</strong>
        </Profile>

        <InstructorInfos>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            totam quibusdam maxime assumenda porro illum accusamus. Possimus
            accusantium delectus atque odit eos enim facere fuga ratione nihil
            deleniti ipsum accusamus consectetur ipsam aliquid nostrum iure
            magnam dicta rem, molestias molestiae sapiente voluptatibus nesciunt
            officiis! Distinctio cumque maiores accusamus pariatur eveniet!
          </p>

          <a href="">Saiba mais</a>
        </InstructorInfos>
      </InstructorInfosWrapper>
    </WhoIsTheInstructorSection>
  );
}
