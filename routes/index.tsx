/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useState } from "preact/hooks";
import Articles from "../islands/Articles.tsx";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Projects from "../islands/Projects.tsx";
import Services from "../islands/Services.tsx";
import Technologies from "../islands/Technologies.tsx";
import Navbar from "../islands/Navbar.tsx";
import ArticleExemple from "../islands/ArticleExemple.tsx";
import ProjectIsland from "../islands/ProjectIsland.tsx";
import ServiceIsland from "../islands/ServiceIsland.tsx";

export default function Home() {
  return (
    <main>
      <Navbar
        links={[
          { name: "Product", url: "#" },
          { name: "Feature", url: "#" },
          { name: "Ressources", url: "#" },
        ]}
      />
      <Header
        header={{
          title: "Bienvenue sur mon Porfolio",
          subtitle: "Portfolio",
          description:
            "We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.",
        }}
      />
      <ProjectIsland start={1}></ProjectIsland>
      <ArticleExemple start={1}></ArticleExemple>
      <ServiceIsland start={1}></ServiceIsland>

      {/* 
      A ne plus utiliser
      <Articles start={1}></Articles> */}
      <Technologies></Technologies>
      <Footer></Footer>
    </main>
  );
}
