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
const data = await getFullList("project", 3, (res) => {
  return res;
});

export default function ProjectIsland(props: CounterProps) {
  // set refrences and state
  const input = createRef();
  const textarea = createRef();
  const [projects, setProjects] = useState(data);

  //   remove an item
  const handleRemoveItem = (id) => {
    mergeData("project", projects.filter((a) => a.id !== id));
    setProjects(projects.filter((a) => a.id !== id));
  };

  //   add an item
  const handleAddItem = (item) => {
    mergeData("project", [...projects, item]);
    setProjects(
      (projects) => [...projects, item],
    );
  };

  const btn = tw`bg-red-100 px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
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
            <span class={tw`text-purple-400 font-bold`}>
              Dolor sit amet consectutar
            </span>
            <h2
              class={tw`mb-6 text-4xl lg:text-5xl font-bold font-heading text-white`}
            >
              Latest Projects
            </h2>
            <div
              class={tw`inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1 bg-purple-500 rounded text-sm`}
            >
              <button
                class={tw`w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 1
              </button>
              <button
                class={tw`w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 bg-white shadow-md rounded font-bold focus:outline-none transition duration-200`}
              >
                Category 2
              </button>
              <button
                class={tw`w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 3
              </button>
              <button
                class={tw`w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 hover:bg-white text-white hover:text-gray-900 rounded hover:shadow-md font-bold focus:outline-none transition duration-200`}
              >
                Category 4
              </button>
            </div>
          </div>
          <div class={tw`flex flex-wrap mb-8 -mx-4`}>
            {projects?.map((d) => {
              return (
                <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
                  <a href="#">
                    <img
                      class={tw`mx-auto h-64 w-full rounded object-cover`}
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                      alt=""
                    />
                    <p
                      class={tw`mb-2 mt-2 font-heading font-medium text-xl text-white group-hover:underline`}
                    >
                      {d.title}
                    </p>
                    <p
                      class={tw`mb-4 font-heading font-medium text-xl text-gray-400 italic`}
                    >
                      {d.description1}
                    </p>
                  </a>
                  <button
                    class={btn}
                    onClick={() => {
                      handleRemoveItem(d.id);
                    }}
                    disabled={!IS_BROWSER}
                  >
                    Delete Project
                  </button>
                </div>
              );
            })}
            <div class={tw`w-full md:w-1/2 lg:w-1/4 mb-8 px-4`}>
              <a href="#">
                <img
                  class={tw`mx-auto h-64 w-full rounded object-cover`}
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
                <p
                  class={tw`mb-4 font-heading font-medium text-xl text-white group-hover:underline`}
                >
                </p>
              </a>
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
                class={tw`inline-block py-2 px-6 leading-loose rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold tansition duration-200`}
                onClick={() => {
                  handleAddItem({
                    "@collectionName": "project",
                    id: (projects.length + 1),
                    title: input.current?.value,
                    description1: textarea.current?.value,
                  });
                }}
                disabled={!IS_BROWSER}
              >
                Ajoutez
              </button>
            </div>
          </div>
          <div class={tw`text-center`}>
            <a
              class={tw`inline-block py-2 px-6 leading-loose rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold tansition duration-200`}
              href="#"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
