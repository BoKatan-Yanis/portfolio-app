/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Footer() {
  return (
    <section class={tw`pt-24 overflow-hidden`}>
      <div class={tw`container mx-auto px-4`}>
        <img
          class={tw`mx-auto mb-16`}
          src="https://shuffle.dev/gradia-assets/logos/gradia-name-black.svg"
          alt=""
        />
        <ul class={tw`flex flex-wrap justify-center -m-5 pb-8`}>
          <li class={tw`p-5`}>
            <a
              class={tw
                `font-heading text-base text-gray-900 hover:text-gray-700`}
              href="#"
            >
              Features
            </a>
          </li>
          <li class={tw`p-5`}>
            <a
              class={tw
                `font-heading text-base text-gray-900 hover:text-gray-700`}
              href="#"
            >
              Pricing
            </a>
          </li>
          <li class={tw`p-5`}>
            <a
              class={tw
                `font-heading text-base text-gray-900 hover:text-gray-700`}
              href="#"
            >
              Affiliate Program
            </a>
          </li>
          <li class={tw`p-5`}>
            <a
              class={tw
                `font-heading text-base text-gray-900 hover:text-gray-700`}
              href="#"
            >
              Press Kit
            </a>
          </li>
        </ul>
        <div class={tw`border-b border-gray-100`}></div>
        <p class={tw`text-gray-600 text-center py-8 text-sm`}>
          © Copyright 2022. All Rights Reserved by Gradia.
        </p>
      </div>
    </section>
  );
}
