import { About } from "@/screens/Home/local_components/About";
import { Advantages } from "@/screens/Home/local_components/Advantages";
import { ClassesTimeline } from "@/screens/Home/local_components/ClassesTimeline";
import { HowItWorks } from "@/screens/Home/local_components/HowItWorks";
import { Introduction } from "@/screens/Home/local_components/Introduction";
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
      </HomeContainer>
    </>
  );
}
