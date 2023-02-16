import { Footer } from "@/components/Footer";
import { About } from "@/screens/Home/local_components/About";
import { Advantages } from "@/screens/Home/local_components/Advantages";
import { ClassesTimeline } from "@/screens/Home/local_components/ClassesTimeline";
import { Clock } from "@/screens/Home/local_components/Clock";
import { FAQ } from "@/screens/Home/local_components/FAQ";
import { Feedbacks } from "@/screens/Home/local_components/Feedbacks";
import { HowItWorks } from "@/screens/Home/local_components/HowItWorks";
import { Introduction } from "@/screens/Home/local_components/Introduction";
import { LearnWebhacking } from "@/screens/Home/local_components/LearnWebhacking";
import { SubscribeNow } from "@/screens/Home/local_components/SubscribeNow";
import { WhoIsTheInstructor } from "@/screens/Home/local_components/WhoIsTheInstructor";
import { HomeContainer } from "@/screens/Home/styles";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Introduction />
        <Advantages />
        <About />
        <ClassesTimeline />
        <HowItWorks />
        <WhoIsTheInstructor />
        <Clock />
        <Feedbacks />
        <LearnWebhacking />
        <FAQ />
        <SubscribeNow />
      </HomeContainer>

      <Footer />
    </>
  );
}
