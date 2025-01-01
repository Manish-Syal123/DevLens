"use client";
import Lottie from "lottie-react";
import EmptyWorkspace from "../../public/EmptyWorkspace.json";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-white">
        <header className="relative z-20 bg-[#FCF8F1] bg-opacity-30">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                    alt=""
                  /> */}
                  <img className="h-14 w-auto" src="/logwithname.png" alt="" />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>

                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>
              </div>

              <a
                href="/dashboard"
                title=""
                className="hidden items-center justify-center rounded-full bg-primary px-5 py-2.5 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-600 focus:bg-yellow-300 focus:text-black lg:inline-flex"
                role="button"
              >
                {" "}
                Dashboard{" "}
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="-mt-4 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:-mt-16 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold uppercase tracking-wider text-primary">
                  AI-powered project management tool for developers and teams.
                </p>
                <h1 className="mt-4 text-2xl font-bold text-black sm:text-2xl lg:mt-8 xl:text-6xl">
                  Collaborate, analyze, and unlock insights with DevLens
                </h1>
                <p className="mt-4 text-base text-black sm:text-xl lg:mt-8">
                  Streamline your projects with AI. Gain deeper understanding
                  effortlessly.
                </p>

                <a
                  href="/sign-up"
                  title=""
                  className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-[#c67eff] focus:bg-blue-600 lg:mt-16"
                  role="button"
                >
                  Join for free
                  <svg
                    className="-mr-2 ml-8 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>

                <p className="relative z-10 mt-5 text-gray-600">
                  Already joined us?{" "}
                  <a
                    href="/sign-in"
                    title=""
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p>
              </div>

              <div>
                {/* <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                /> */}
                <Lottie
                  animationData={EmptyWorkspace}
                  loop={true}
                  className="-mt-20 h-[40rem] w-[50rem] items-center justify-center lg:h-[50rem] lg:w-[50rem]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:-mt-28 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              130+ Handcoded Blocks
            </p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Create. Customize. Celebrate your stunning project.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-x-4 gap-y-10 sm:mt-20 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2 lg:space-y-12 lg:pr-16 xl:pr-24">
              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Quick, Simple & Effortless integration.
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Flexible & User-friendly
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-9 w-9 flex-shrink-0 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Made with Github API's
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-9 w-9 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-9 w-9 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-9 w-9 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & weight
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-9 w-9 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Seamless Meetings
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-blue-600">30k+</span> world
              className companies & developers.
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-x-6 gap-y-6 text-center sm:mt-12 lg:mt-20 lg:max-w-full lg:grid-cols-3 xl:gap-x-12">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Jenny Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Robert Fox
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Founder at Brain.co
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="px-8 py-12">
                <div className="relative mx-auto h-24 w-24">
                  <img
                    className="relative mx-auto h-24 w-24 rounded-full object-cover"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="tex-tblack mt-9 text-base font-semibold">
                  Kristin Watson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  UX Designer at Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div className="relative mt-10 grid grid-cols-2 gap-6 md:mt-0">
              <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                <img
                  className="origin-top scale-150 object-cover object-top"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                  alt=""
                />
              </div>

              <div className="relative">
                <div className="aspect-w-3 aspect-h-4 h-full overflow-hidden">
                  <img
                    className="scale-150 object-cover lg:origin-bottom-right"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 grid h-full w-full place-items-center">
                  <button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-md lg:h-20 lg:w-20"
                  >
                    <svg
                      className="h-6 w-6 lg:h-8 lg:w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <img
                  className="h-32 w-32"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col items-start xl:px-16">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <a
                href="#"
                title=""
                className="mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 px-5 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 focus:opacity-90 lg:mt-auto"
                role="button"
              >
                Get started now
                <svg
                  className="-mr-1 ml-8 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Create a free account
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Analyse your codebase
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Chat with your repos
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Pricing & Plans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullam co est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="mt-16 hidden lg:block">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-8 pr-4"></th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Free{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$0</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Team{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$99</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>

                  <th className="rounded-t-xl bg-gray-900 px-4 py-8 text-center">
                    <span className="rounded-full bg-blue-600 px-4 py-2 text-base font-medium text-white">
                      {" "}
                      Popular{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold text-white">$150</p>
                    <p className="mt-2 text-base font-normal text-gray-200">
                      Per month
                    </p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">
                      {" "}
                      Enterprise{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$490</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Per month
                    </p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    Website number
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    01
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    10
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    50
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    Unlimited
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    Server storage
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    100 GB
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    500 GB
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    1 TB
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    Unlimited
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    Database
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    15
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    Unlimited
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    Unlimited
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    Unmetered Bandwidth
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    SSD Disk
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    VCPUS Fontworld
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    WordPress install
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 py-4 pr-4 font-medium">
                    Server speed
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    -
                  </td>

                  <td className="border-b border-white/20 bg-gray-900 px-4 py-4 text-center text-white">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>

                  <td className="border-b border-gray-200 px-4 py-4 text-center">
                    <svg
                      className="mx-auto h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>

                <tr>
                  <td className="py-6 pr-4"></td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>

                  <td className="rounded-b-xl bg-orange-500 px-4 py-6 text-center text-white">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-white"
                    >
                      Get Started
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 block divide-y divide-gray-200 border-b border-t border-gray-200 lg:hidden">
          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600"> Free </span>
              <p className="mt-2 text-xl font-bold">$0</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600"> Team </span>
              <p className="mt-2 text-xl font-bold">$99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Popular{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$150</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>

            <div className="px-2 py-2">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Enterprise{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$490</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Website number</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">01</div>

            <div className="px-2 py-2">10</div>

            <div className="px-2 py-2">100</div>

            <div className="px-2 py-2">Unlimited</div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Server storage</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">100 GB</div>

            <div className="px-2 py-2">500 GB</div>

            <div className="px-2 py-2">1 TB</div>

            <div className="px-2 py-2">Unlimited</div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Database</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">15</div>

            <div className="px-2 py-2">Unlimited</div>

            <div className="px-2 py-2">Unlimited</div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Unmetered bandwidth</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">SSD Disk</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">VCPUS Fontworld</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">WordPress install</p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="px-2 py-2">
              <svg
                className="mx-auto h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600"> Free </span>
              <p className="mt-2 text-xl font-bold">$0</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-1 py-2 text-xs text-white transition-all duration-200 hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600"> Team </span>
              <p className="mt-2 text-xl font-bold">$99</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-1 py-2 text-xs text-white transition-all duration-200 hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Popular{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$150</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-1 py-2 text-xs text-white transition-all duration-200 hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>

            <div className="px-1 pb-4 pt-2 sm:px-4">
              <span className="text-sm font-medium text-blue-600">
                {" "}
                Enterprise{" "}
              </span>
              <p className="mt-2 text-xl font-bold">$490</p>
              <span className="mt-1 text-sm font-normal text-gray-500">
                {" "}
                Per month{" "}
              </span>
              <a
                href="#"
                title=""
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-1 py-2 text-xs text-white transition-all duration-200 hover:bg-blue-700"
                role="button"
              >
                {" "}
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="bg-gray-50 py-10 sm:pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:col-span-3 lg:grid-cols-6">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <img className="h-14 w-auto" src="/logwithname.png" alt="" />

              <p className="mt-7 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>

              <ul className="mt-9 flex items-center space-x-3">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Manish-Syal123"
                    target="_blank"
                    title="Github Profile"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-600"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Company
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Career{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Help
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Delivery Details{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Subscribe to newsletter
              </p>

              <form action="#" method="POST" className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="mb-10 mt-16 border-gray-200" />

          <p className="text-center text-sm text-gray-600">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Manish Syal
          </p>
        </div>
      </section>
    </div>
  );
}
