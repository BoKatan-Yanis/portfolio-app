/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import Articles from "../islands/Articles.tsx";
import Counter from "../islands/Counter.tsx";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Projects from "../islands/Projects.tsx";
import Services from "../islands/Services.tsx";
import Technologies from "../islands/Technologies.tsx";


export default function Home() {
  return (
    <main>
      <Header description={"Ceci est le portfolio de Yanis"} />
      <Projects></Projects>
      <Articles start={1}></Articles>
      <Services></Services>
      <Technologies></Technologies>
      <Footer></Footer>
    </main>
  );
}
