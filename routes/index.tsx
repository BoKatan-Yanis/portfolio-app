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

import {createOne, getFullList} from '@helper'


const data = await getFullList('article');

export default function Home() {
  
  const [articles, setArticles] = useState(data);
  return (
    <main>
      <Navbar links={[
          { name: "Product", url: "#" },
          { name: "Feature", url: "#" },
          { name: "Ressources", url: "#" }
        ]}
      />
      <Header
        header={{
          title: "Ceci est le portfolio de Yanis",
          subtitle: "Portfolio",
          description:
            "We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.",
        }}
      />
      <Projects></Projects>

      {/* Exemple de l'utilisation de l'api */}
      <ul>
      {articles.map((d)=> {
        return ( <li> {d.title}</li>)
      })}
      </ul>


      <Articles start={1}></Articles>
      <Services></Services>
      <Technologies></Technologies>
      <Footer></Footer>

    </main>
  );
}
