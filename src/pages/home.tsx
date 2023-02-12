import { About } from "@/screens/Home/local_components/About";
import { Advantages } from "@/screens/Home/local_components/Advantages";
import { Introduction } from "@/screens/Home/local_components/Introduction";
import { HomeContainer } from "@/screens/Home/styles";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Introduction />
        <Advantages />
        <About />
      </HomeContainer>
    </>
  );
}
