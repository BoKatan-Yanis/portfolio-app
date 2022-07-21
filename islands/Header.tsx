/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { headerType } from "../types/type.ts";


interface HeaderProps {
  header: headerType;
}

export default function Header(props: HeaderProps) {
  return (<section class={tw`relative bg-white overflow-hidden`} style="background-image: url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg'); background-position: center;">

  <div class={tw`py-20 md:py-28`}>
    <div class={tw`container px-4 mx-auto`}>
      <div class={tw`flex flex-wrap xl:items-center -mx-4`}>
        <div class={tw`w-full md:w-1/2 px-4 mb-16 md:mb-0`}>
          <span class={tw`inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-red-500 uppercase rounded-9xl`}>{props.header.subtitle}</span>
          <h1 class={tw`mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight`}>{props.header.title}</h1>
          <p class={tw`mb-8 text-lg md:text-xl text-purple-500 font-medium`}>{props.header.description}</p>
          <div class={tw`flex flex-wrap`}>
            <div class={tw`w-full md:w-auto py-1 md:py-0 md:mr-4`}><a class={tw`inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-red-50 font-medium text-center bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border border-red-500 rounded-md shadow-sm`} href="#">Request a Demo</a></div>
            <div class={tw`w-full md:w-auto py-1 md:py-0`}><a class={tw`inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-purple-800 font-medium text-center bg-white hover:bg-purple-100 focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 border border-purple-200 rounded-md shadow-sm`} href="#">Sign Up</a></div>
          </div>
        </div>
        <div class={tw`w-full md:w-1/2 px-4`}>
          <div class={tw`relative mx-auto md:mr-0 max-w-max`}>
            <img class={tw`absolute z-10 -left-14 -top-12 w-28 md:w-auto`} src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg" alt=""/>
            <img class={tw`absolute z-10 -right-7 -bottom-8 w-28 md:w-auto`} src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg" alt=""/>
            <svg class={tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-red-500 hover:text-red-600`} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="currentColor"></circle>
              <path class={tw`text-white`} d="M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z" fill="currentColor"></path>
            </svg>
            <div class={tw`relative overflow-hidden rounded-7xl`}>
              <img src="https://shuffle.dev/flex-ui-assets/images/headers/placeholder-video.png"/>
              <video class={tw`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none`} poster="https://shuffle.dev/flex-ui-assets/images/testimonials/video-frame.jpeg" muted>
                <source src="https://static.shuffle.dev/files/video-placeholder.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>);

}