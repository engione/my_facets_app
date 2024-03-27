import { Header } from "../components/Header/Header";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Button } from "../components/Button/Button";
import { Hero } from "../components/Hero/Hero";

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
