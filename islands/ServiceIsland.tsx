/** @jsx h */
import { createRef, h } from "preact";
import { setState, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { getFullList, mergeData } from "@helper";

// Setup of the type received in props
interface CounterProps {
  start: number;
}
const data = await getFullList("service", 3, (res) => {
  return res;
});

export default function ServiceIsland(props: CounterProps) {
  // set refrences and state
  const input = createRef();
  const textarea = createRef();
  const textprice = createRef();
  const [services, setServices] = useState(data);

  //   remove an item
  const handleRemoveItem = (id) => {
    mergeData(
      "service",
      services.filter((a) => a.id !== id)
    );
    setServices(services.filter((a) => a.id !== id));
  };

  //   add an item
  const handleAddItem = (item) => {
    mergeData("service", [...services, item]);
    setServices((services) => [...services, item]);
  };

  const btn = tw`bg-red-100 px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <section class={tw`py-20 2xl:py-40 bg-gray-800 `}>
      <div class={tw`container px-4 mx-auto `}>
        <div class={tw`mb-16 md:mb-24 text-center `}>
          <h2
            class={tw`mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading `}
          >
            Choississez votre service
          </h2>
          <p class={tw`text-lg text-gray-200 `}>
            Voici la liste de mes services de développement
          </p>
        </div>
        <div class={tw`max-w-6xl mx-auto `}>
          {services?.map((d) => {
            return (
              <div
                class={tw`lg:pl-24 pt-12 lg:pt-24 pb-14 mb-10 bg-gray-900 rounded-xl border-12 border-gray-700 `}
              >
                <div class={tw`flex flex-wrap -mx-4 `}>
                  <div class={tw`container `}>
                    <div class={tw`w-full lg:w-7/12 px-4 mb-4 lg:mb-0 `}>
                      <div class={tw`px-8 lg:pl-0 max-w-xl `}>
                        <div class={tw`flex items-center mb-8 `}>
                          <h2
                            class={tw`mr-16 text-3xl md:text-4xl font-bold font-heading text-white `}
                          >
                            {d.title}
                          </h2>
                          <span
                            class={tw`hidden lg:inline-block w-full py-px bg-gray-700 `}
                          ></span>
                        </div>
                        <p class={tw`mb-6 text-lg text-gray-200 `}>
                          {d.description1}
                        </p>
                      </div>
                    </div>
                    <div class={tw`w-full lg:w-5/12 px-4 `}>
                      <div class={tw`h-full text-center `}>
                        <h3 class={tw`mb-3 text-lg font-bold text-blue-500 `}>
                          20% off for students*
                        </h3>
                        <div
                          class={tw`mb-1 flex justify-center font-bold text-white `}
                        >
                          <span
                            class={tw`self-start inline-block mr-1 text-xl `}
                          >
                            $
                          </span>
                          <p class={tw`self-end text-5xl `}>{d.price}</p>
                        </div>
                        <p class={tw`mb-10 text-lg text-white `}>/Month</p>
                        <a
                          class={tw`px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200 `}
                          href="#"
                        >
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            class={tw`lg:pl-24 pt-12 lg:pt-24 pb-14 bg-gray-900 rounded-xl border-12 border-gray-700 `}
          >
            <div class={tw`flex flex-wrap -mx-4 `}>
              <div class={tw`w-full lg:w-full px-4 mb-4 lg:mb-0 `}>
                <div class={tw`px-8 lg:pl-0 max-w-xl `}>
                  <div class={tw`flex items-center mb-8 `}>
                    <div class={tw`w-full md:w-1/2 lg:w-full mb-8 px-4`}>
                    <input
                        type="number"
                        ref={textprice}
                        class={tw`w-full mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
                      />
                      <input
                        type="text"
                        ref={input}
                        class={tw`w-full mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
                      />
                      <textarea
                        type="text"
                        ref={textarea}
                        class={tw`w-full mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
                      ></textarea>
                      <button
                        class={tw`px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200 `}
                        onClick={() => {
                          handleAddItem({
                            "@collectionName": "service",
                            id: services.length + 1,
                            title: input.current?.value,
                            description1: textarea.current?.value,
                            price: textprice.current?.value,
                          });
                        }}
                        disabled={!IS_BROWSER}
                      >
                        Ajoutez
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
