import { Title } from "@/components/SectionTitle/styles";
import { Class } from "./local_components/Class";
import { Classes, ClassesTimelineSection } from "./styles";

export function ClassesTimeline() {
  return (
    <ClassesTimelineSection>
      <Title position="center">
        <span>AULAS</span>

        <h2>O que você vai aprender?</h2>
      </Title>

      <Classes>
        <Class
          classDate="14/09"
          classDateDescription="TERÇA - ÀS 20H"
          classNumber={1}
          classTitle="Descobrindo o WebHacking"
          classResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra. Nisi id in porta nec, a a. Eu in dis et, morbi ut at pellentesque. Massa eu amet morbi eu diam ultricies tellus aliquet. Vel, amet dolor cursus lorem quis amet sed. Mollis diam a purus nulla non, mattis proin odio. Facilisis molestie nibh egestas lacus adipiscing."
          contentDirection="right"
        />

        <Class
          classDate="14/09"
          classDateDescription="TERÇA - ÀS 20H"
          classNumber={1}
          classTitle="Descobrindo o WebHacking"
          classResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra. Nisi id in porta nec, a a. Eu in dis et, morbi ut at pellentesque. Massa eu amet morbi eu diam ultricies tellus aliquet. Vel, amet dolor cursus lorem quis amet sed. Mollis diam a purus nulla non, mattis proin odio. Facilisis molestie nibh egestas lacus adipiscing."
          contentDirection="left"
        />

        <Class
          classDate="14/09"
          classDateDescription="TERÇA - ÀS 20H"
          classNumber={1}
          classTitle="Descobrindo o WebHacking"
          classResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra. Nisi id in porta nec, a a. Eu in dis et, morbi ut at pellentesque. Massa eu amet morbi eu diam ultricies tellus aliquet. Vel, amet dolor cursus lorem quis amet sed. Mollis diam a purus nulla non, mattis proin odio. Facilisis molestie nibh egestas lacus adipiscing."
          contentDirection="right"
        />

        <Class
          classDate="14/09"
          classDateDescription="TERÇA - ÀS 20H"
          classNumber={1}
          classTitle="Descobrindo o WebHacking"
          classResume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra. Nisi id in porta nec, a a. Eu in dis et, morbi ut at pellentesque. Massa eu amet morbi eu diam ultricies tellus aliquet. Vel, amet dolor cursus lorem quis amet sed. Mollis diam a purus nulla non, mattis proin odio. Facilisis molestie nibh egestas lacus adipiscing."
          contentDirection="left"
        />
      </Classes>

      <a href="">CADASTRE-SE AGORA</a>
    </ClassesTimelineSection>
  );
}
