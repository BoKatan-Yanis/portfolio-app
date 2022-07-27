/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useState } from "preact/hooks";

export default function Home() {
  return (
    <main>
      <div class={tw`relative min-h-screen md:flex` }>
        <div class={tw`bg-gray-800 text-gray-100 flex justify-between items-center md:hidden` }>
          <a href="#" class={tw`block p-4 text-white font-bold` }>Panne Administrateur</a>
          <button class={tw`mobile-menu-button p-4 focus:outline-none focus:bg-gray-700` }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={tw`h-6 w-6` }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div class={tw`sidebar bg-gray-100 text-gray-900 w-64 px-2 space-y-6 py-4 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out` }>
          <a href="#" class={tw`text-gray-900 flex items-center px-4` }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={tw`h-6 w-6` }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span class={tw`text-2xl font-bold px-2` }>Panel Adin</span>
          </a>
          <nav>
            <a
              href=""
              class={tw`block py-2 px-4 rounded hover:bg-gray-200 transition duration-200` }
            >
              About
            </a>
            <a
              href=""
              class={tw`block py-2 px-4 rounded hover:bg-gray-200 transition duration-200` }
            >
              Bags
            </a>
            <a
              href=""
              class={tw`block py-2 px-4 rounded hover:bg-gray-200 transition duration-200` }
            >
              Accessories
            </a>
            <a
              href=""
              class={tw`block py-2 px-4 rounded hover:bg-gray-200 transition duration-200` }
            >
              Materials
            </a>
            <a
              href=""
              class={tw`block py-2 px-4 rounded hover:bg-gray-200 transition duration-200` }
            >
              Contact
            </a>
          </nav>
        </div>

        <div class={tw`flex-1 p-10 text-2xl font-bold bg-white` }>
          content goes here
        </div>
      </div>
    </main>
  );
}
