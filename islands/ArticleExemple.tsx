/** @jsx h */
import { createRef, h } from "preact";
import { setState, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { createOne, getFullList, mergeData } from "@helper";

// Setup of the type received in props
interface CounterProps {
  start: number;
}
const data = await getFullList("article", 3, (res) => {
  return res;
});

export default function ArticleExemple(props: CounterProps) {
  // set refrences and state
  const input = createRef();
  const [articles, setArticles] = useState(data);

  //   remove an item
  const handleRemoveItem = (id) => {
    mergeData("article", articles.filter((a) => a.id !== id));
    setArticles(articles.filter((a) => a.id !== id));
  };

  //   add an item
  const handleAddItem = (item) => {
    mergeData("article", [...articles, item]);
    setArticles(
      (articles) => [...articles, item],
    );
  };

  const btn = tw`bg-red-100 px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <section class={tw`pt-20 pb-32 overflow-hidden`}>
      <div class={tw`container mx-auto px-4`}>
        <div class={tw`md:max-w-lg mx-auto text-center mb-20`}>
          <h2
            class={tw
              `mb-4 font-heading font-semibold text-gray-900 text-6xl sm:text-7xl`}
          >
            Liste des articles
          </h2>
          <p class={tw`text-lg text-gray-500`}>
            Voici la liste des derniers articles
          </p>
        </div>
        <div class={tw`flex flex-wrap -m-9`}>
          {/* Exemple de l'utilisation de l'api */}

          {articles?.map((d) => {
            return (
              <div class={tw`w-full md:w-1/3 p-9`}>
                <a class={tw`group`} href="#">
                  <div
                    class={tw
                      `group flex flex-col mb-5 overflow-hidden rounded-xl`}
                  >
                    <img
                      class={tw
                        `transform group-hover:scale-110 transition ease-out duration-500`}
                      src="https://shuffle.dev/gradia-assets/images/blog/blog-horizontal1.png"
                      alt=""
                    />
                  </div>
                  <p
                    class={tw
                      `mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
                  >
                    {d.title}
                  </p>
                  <h2
                    class={tw
                      `font-heading font-medium text-xs uppercase text-gray-500 tracking-px`}
                  >
                    Technology . 4 min read
                  </h2>
                </a>

                <button
                  class={btn}
                  onClick={() => {
                    handleRemoveItem(d.id);
                  }}
                  disabled={!IS_BROWSER}
                >
                  Delete Article
                </button>
              </div>
            );
          })}
          <div class={tw`w-full md:w-1/3 p-9`}>
            <div
              class={tw`group flex flex-col mb-5 overflow-hidden rounded-xl`}
            >
              <img
                class={tw
                  `transform group-hover:scale-110 transition ease-out duration-500`}
                src="https://shuffle.dev/gradia-assets/images/blog/blog-horizontal2.png"
                alt=""
              />
            </div>
            <input
              class={tw
                `w-full mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
              placeholder="Edite Here : You will never believe these bizarre truth of travel."
              type="text"
              id="titleArticle"
              ref={input}
            />
            <h2
              class={tw
                `font-heading font-medium text-xs uppercase text-gray-500 tracking-px`}
            >
              Technology . 4 min read
            </h2>
            <button
              class={btn}
              onClick={() => {
                handleAddItem({
                  "@collectionName": "article",
                  id: (articles.length + 1),
                  title: input.current?.value,
                });
              }}
              disabled={!IS_BROWSER}
            >
              Ajoutez
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
