import React from 'react';

function NewDetail() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        rel="stylesheet"
      />
      <style>
        {`
          .smooth {transition: box-shadow 0.3s ease-in-out;}
          ::selection {background-color: aliceblue}
          :root {::-webkit-scrollbar {height: 10px;width: 10px;} ::-webkit-scrollbar-track {background: #efefef;border-radius: 6px;} ::-webkit-scrollbar-thumb {background: #d5d5d5;border-radius: 6px;} ::-webkit-scrollbar-thumb:hover {background: #c4c4c4;}}
          .scroll-top {position: fixed;z-index: 50;padding: 0;right: 30px;bottom: 100px;opacity: 0;visibility: hidden;transform: translateY(15px);height: 46px;width: 46px;cursor: pointer;display: flex;align-items: center;justify-content: center;border-radius: 50%;transition: all .4s ease;border: none;box-shadow: inset 0 0 0 2px #ccc;color: #ccc;background-color: #fff;}
          .scroll-top.is-active {opacity: 1;visibility: visible;transform: translateY(0);}
          .scroll-top .icon-tabler-arrow-up {position: absolute;stroke-width: 2px;stroke: #333;}
          .scroll-top svg path {fill: none;}
          .scroll-top svg.progress-circle path {stroke: #333;stroke-width: 4;transition: all .4s ease;}
          .scroll-top:hover {color: var(--ghost-accent-color);}
          .scroll-top:hover .progress-circle path, .scroll-top:hover .icon-tabler-arrow-up {stroke: var(--ghost-accent-color);}
        `}
      </style>

      <div
        id="header"
        className="bg-white fixed w-full z-10 top-0 hidden animated"
        style={{ opacity: 0.95 }}
      >
        <div className="bg-white">
          <div className="flex flex-wrap items-center content-center">
            <div className="flex w-1/2 justify-start text-white font-extrabold">
              <a
                className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334484"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-squirrel"
                >
                  <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
                  <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
                  <path d="M15.2 22a3 3 0 0 0-2.2-5" />
                  <path d="M18 13h.01" />
                </svg>
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  Ghostwind CSS
                </span>
              </a>
            </div>
            <div className="flex w-1/2 justify-end content-center">
              <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
                <span className="pr-2">Share this</span> 👉
              </p>
              <a
                className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                href="https://twitter.com/intent/tweet?url=#"
                style={{ backgroundColor: '#33b1ff' }}
              >
                <svg
                  className="fill-current text-white h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                </svg>
              </a>
              <a
                className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
                style={{ backgroundColor: '#005e99' }}
              >
                <svg
                  className="fill-current text-white h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          id="progress"
          className="h-1 bg-white shadow"
          style={{
            background:
              'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)',
          }}
        ></div>
      </div>

      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          04 AUGUST 2023 <span className="text-gray-900">/</span> GETTING
          STARTED
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          Welcome to Ghostwind CSS
        </h1>
      </div>

      <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded">
        <div
          className="container max-w-5xl mx-auto -mt-32"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604026130927-3ab11b5f85b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
      </div>

      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            <p className="text-2xl md:text-3xl mb-5">
              👋 Welcome fellow Tailwind CSS and Ghost fan. This starter template
              combines the flexibility of{" "}
              <a
                className="text-green-500 no-underline hover:underline"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>{" "}
              with the power of{" "}
              <a
                className="text-green-500 no-underline hover:underline"
                href="https://ghost.org/"
              >
                Ghost
              </a>{" "}
              .
            </p>
            <p className="py-6">
              The theme is fully configured to take advantage of all Tailwind's
              features. The included CSS file is generated using Tailwind's JIT
              engine. The benefit of this is an extremely small bundle size
              because it only includes the classes you use.
            </p>
            <p className="py-6">
              You can start using this template right away by copying the code
              into your own Ghost theme. Happy hacking!
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center font-sans p-8 md:p-24">
        <a
          className="flex text-gray-900 no-underline hover:text-green-500 hover:underline"
          href="#"
        >
          👈 Back to the homepage
        </a>
      </div>

      <div
        id="footer"
        className="bg-white border-t border-gray-400 shadow"
      >
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Ghostwind CSS is a starter template to build modern websites
                  with Tailwind CSS and the Ghost content API.
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      className="inline-block text-gray-900 no-underline hover:text-green-500 hover:underline py-1"
                      href="#"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-900 no-underline hover:text-green-500 hover:underline py-1"
                      href="#"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-900 no-underline hover:text-green-500 hover:underline py-1"
                      href="#"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        id="scroll-top"
        className="scroll-top"
        title="Scroll to top"
        style={{ display: 'none' }}
      >
        <svg
          className="icon-tabler-arrow-up"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 19V5" />
          <path d="M18 11l-6-6-6 6" />
        </svg>
        <svg
          className="progress-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="none" fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2A10 10 0 1 0 12 22" />
        </svg>
      </button>

      <script>
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const scrollButton = document.getElementById('scroll-top');
            window.onscroll = function() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollButton.style.display = "block";
              } else {
                scrollButton.style.display = "none";
              }
            };
            scrollButton.addEventListener('click', function() {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          });
        `}
      </script>
    </>
  );
}

export default NewDetail;
