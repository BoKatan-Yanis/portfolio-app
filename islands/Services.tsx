/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Services() {
  return (
    <section class={tw`pt-28 pb-40 bg-gray-50 overflow-hidden`}>
      <div class={tw`container mx-auto px-4`}>
        <div class={tw`max-w-xl mx-auto`}>
          <h2
            class={tw
              `mb-5 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-gray-900`}
          >
            Plan, Select, Grow
          </h2>
          <p class={tw`mb-20 text-gray-600`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            nisl, ullamcorper pulvinar sed tincidunt tempus. In mi diam neque
            consectetur quis vitae.
          </p>
          <div class={tw`p-px bg-gradient-cyan rounded-10 shadow-7xl`}>
            <div class={tw`p-12 text-center rounded-10 bg-white`}>
              <p
                class={tw
                  `mb-7 font-heading text-xs font-semibold text-gray-900 uppercase tracking-px`}
              >
                Pricing
              </p>
              <h3
                class={tw
                  `mb-4 font-heading font-semibold text-5xl text-gray-900`}
              >
                $9/user/month
              </h3>
              <p class={tw`mb-10 text-xl text-gray-600`}>
                Create unlimited project, invite everyone from your team, grow
                everything fast
              </p>
              <button
                class={tw
                  `group relative mb-6 px-16 py-3.5 font-heading bg-gray-900 text-base font-bold text-white overflow-hidden rounded-md`}
              >
                <div
                  class={tw
                    `absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan`}
                >
                </div>
                <p class={tw`relative z-10`}>Create Your First Project</p>
              </button>
              <p class={tw`text-gray-500`}>
                30 days free trial, No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
