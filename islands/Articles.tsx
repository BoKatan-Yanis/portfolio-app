/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  return (
    <section class={tw`pt-20 pb-32 overflow-hidden`}>
      <div class={tw`container mx-auto px-4`}>
        <div class={tw`md:max-w-lg mx-auto text-center mb-20`}>
          <h2
            class={tw
              `mb-4 font-heading font-semibold text-gray-900 text-6xl sm:text-7xl`}
          >
            Latest from our blog
          </h2>
          <p class={tw`text-lg text-gray-500`}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </p>
        </div>
        <div class={tw`flex flex-wrap -m-9`}>
          <div class={tw`w-full md:w-1/3 p-9`}>
            <a class={tw`group`} href="#">
              <div
                class={tw`group flex flex-col mb-5 overflow-hidden rounded-xl`}
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
                You will never believe these bizarre truth of travel.
              </p>
              <h2
                class={tw
                  `font-heading font-medium text-xs uppercase text-gray-500 tracking-px`}
              >
                Technology . 4 min read
              </h2>
            </a>
          </div>
          <div class={tw`w-full md:w-1/3 p-9`}>
            <a class={tw`group`} href="#">
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
              <p
                class={tw
                  `mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
              >
                You will never believe these bizarre truth of travel.
              </p>
              <h2
                class={tw
                  `font-heading font-medium text-xs uppercase text-gray-500 tracking-px`}
              >
                Technology . 4 min read
              </h2>
            </a>
          </div>
          <div class={tw`w-full md:w-1/3 p-9`}>
            <a class={tw`group`} href="#">
              <div
                class={tw`group flex flex-col mb-5 overflow-hidden rounded-xl`}
              >
                <img
                  class={tw
                    `transform group-hover:scale-110 transition ease-out duration-500`}
                  src="https://shuffle.dev/gradia-assets/images/blog/blog-horizontal3.png"
                  alt=""
                />
              </div>
              <p
                class={tw
                  `mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline`}
              >
                You will never believe these bizarre truth of travel.
              </p>
              <h2
                class={tw
                  `font-heading font-medium text-xs uppercase text-gray-500 tracking-px`}
              >
                Technology . 4 min read
              </h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
