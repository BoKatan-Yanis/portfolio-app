/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Projects() {
  return (
    <section>
      <div class={tw`skew skew-top mr-for-radius`}>
        <svg
          class={tw`h-8 md:h-12 lg:h-20 w-full text-purple-600`}
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class={tw`skew skew-top ml-for-radius`}>
        <svg
          class={tw`h-8 md:h-12 lg:h-20 w-full text-purple-600`}
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class={tw`py-20 bg-purple-600 radius-for-skewed`}>
        <div class={tw`container mx-auto px-4`}>
          <div class={tw`mb-8 md:mb-16 max-w-lg mx-auto text-center`}>
            <h2
              class={tw
                `mb-6 text-4xl lg:text-5xl font-bold font-heading text-white`}
            >
              Mes derniers projets
            </h2>
            <div
              class={tw
                `inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1 bg-purple-500 rounded text-sm`}
            >
              <button
                class={tw
                  `w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 1
              </button>
              <button
                class={tw
                  `w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 bg-white shadow-md rounded font-bold focus:outline-none transition duration-200`}
              >
                Category 2
              </button>
              <button
                class={tw
                  `w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 3
              </button>
              <button
                class={tw
                  `w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 4
              </button>
            </div>
          </div>
          <div class={tw`flex flex-wrap mb-8 -mx-4`}>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <div class={tw`relative mx-auto h-64 w-full rounded-lg`}>
                <img
                  class={tw`relative h-full w-full rounded-lg object-cover`}
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
                <div
                  class={tw`absolute inset-0 bg-gray-900 opacity-50 rounded-lg`}
                >
                </div>
                <div
                  class={tw`absolute inset-0 flex items-center justify-center`}
                >
                  <a
                    class={tw
                      `inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose`}
                    href="#"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80"
                  alt=""
                />
              </a>
            </div>
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class={tw`text-center`}>
            <a
              class={tw
                `inline-block py-2 px-6 leading-loose rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold tansition duration-200`}
              href="#"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
      <div class={tw`skew skew-bottom mr-for-radius`}>
        <svg
          class={tw`h-8 md:h-12 lg:h-20 w-full text-purple-600`}
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class={tw`skew skew-bottom ml-for-radius`}>
        <svg
          class={tw`h-8 md:h-12 lg:h-20 w-full text-purple-600`}
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
}
