/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Technologies() {
  return (
    <section class={tw`pt-28 pb-32 bg-purple-600 overflow-hidden`}>
      <div class={tw`container mx-auto px-4`}>
        <p
          class={tw
            `mb-16 font-heading font-semibold text-6xl sm:text-7xl text-white text-center`}
        >
          Trusted by popular marketing brands
        </p>
        <div
          class={tw
            `flex flex-wrap justify-center items-center -m-10 pb-10 border-b border-gray-800`}
        >
          <div class={tw`w-auto p-10`}>
            <img
              src="https://shuffle.dev/gradia-assets/logos/brands/brand-light4.png"
              alt=""
            />
          </div>
          <div class={tw`w-auto p-10`}>
            <img
              src="https://shuffle.dev/gradia-assets/logos/brands/brand-light1.png"
              alt=""
            />
          </div>
          <div class={tw`w-auto p-10`}>
            <img
              src="https://shuffle.dev/gradia-assets/logos/brands/brand-light2.png"
              alt=""
            />
          </div>
          <div class={tw`w-auto p-10`}>
            <img
              src="https://shuffle.dev/gradia-assets/logos/brands/brand-light3.png"
              alt=""
            />
          </div>
        </div>
        <div class={tw`mt-24 max-w-2xl mx-auto text-center`}>
          <div class={tw`flex items-center justify-center -m-1 mb-10`}>
            <img
              class={tw`p-1`}
              src="https://shuffle.dev/gradia-assets/elements/logos/star.svg"
              alt=""
            />
            <img
              class={tw`p-1`}
              src="https://shuffle.dev/gradia-assets/elements/logos/star.svg"
              alt=""
            />
            <img
              class={tw`p-1`}
              src="https://shuffle.dev/gradia-assets/elements/logos/star.svg"
              alt=""
            />
            <img
              class={tw`p-1`}
              src="https://shuffle.dev/gradia-assets/elements/logos/star.svg"
              alt=""
            />
            <img
              class={tw`p-1`}
              src="https://shuffle.dev/gradia-assets/elements/logos/star.svg"
              alt=""
            />
          </div>
          <p class={tw`mb-5 text-xl text-gray-300`}>
            “You made it so simple. My new team is so much faster and easier to
            work with than my old site. I just choose the page, make the
            change.”
          </p>
          <p class={tw`font-heading text-xl text-white`}>
            Denny Jones, founder of Growthio
          </p>
        </div>
      </div>
    </section>
  );
}
