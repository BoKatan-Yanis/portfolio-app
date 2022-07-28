/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Services() {
  return (
    <section class={tw`py-20 2xl:py-40 bg-gray-800 `}>
      <div class={tw`container px-4 mx-auto `}>
        <div class={tw`mb-16 md:mb-24 text-center `}>
          <h2 class={tw`mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading `}>
            Choississez votre service
          </h2>
          <p class={tw`text-lg text-gray-200 `}>
            Voici la liste de mes services de développement
          </p>
        </div>
        <div class={tw`max-w-6xl mx-auto `}>
          <div class={tw`lg:pl-24 pt-12 lg:pt-24 pb-14 mb-10 bg-gray-900 rounded-xl border-12 border-gray-700 `}>
            <div class={tw`flex flex-wrap -mx-4 `}>
              <div class={tw`w-full lg:w-7/12 px-4 mb-4 lg:mb-0 `}>
                <div class={tw`px-8 lg:pl-0 max-w-xl `}>
                  <div class={tw`flex items-center mb-8 `}>
                    <h2 class={tw`mr-16 text-3xl md:text-4xl font-bold font-heading text-white `}>
                      Beginner
                    </h2>
                    <span class={tw`hidden lg:inline-block w-full py-px bg-gray-700 `}></span>
                  </div>
                  <p class={tw`mb-6 text-lg text-gray-200 `}>
                    The brown me quam, sagittis porttitor lorem sort lora
                    commodo lorem fringilla nisl.
                  </p>
                  <ul class={tw`flex flex-wrap text-left -mx-4 text-white text-base lg:text-lg `}>
                    <li class={tw`w-full lg:w-1/2 px-4 mb-6 flex items-center `}>
                      <svg
                        class={tw`w-5 h-4 mr-6 `}
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>Complete files</span>
                    </li>
                    <li class={tw`w-full lg:w-1/2 px-4 mb-6 flex items-center `}>
                      <svg
                        class={tw`w-5 h-4 mr-6 `}
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>100GB cloud storage</span>
                    </li>
                    <li class={tw`w-full lg:w-1/2 px-4 mb-6 flex items-center `}>
                      <svg
                        class={tw`w-5 h-4 mr-6 `}
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>500 team members</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class={tw`w-full lg:w-5/12 px-4 `}>
                <div class={tw`h-full text-center `}>
                  <h3 class={tw`mb-3 text-lg font-bold text-blue-500 `}>
                    20% off for students*
                  </h3>
                  <div class={tw`mb-1 flex justify-center font-bold text-white `}>
                    <span class={tw`self-start inline-block mr-1 text-xl `}>$</span>
                    <p class={tw`self-end text-5xl `}>19.90</p>
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
      </div>
    </section>
  );
}
