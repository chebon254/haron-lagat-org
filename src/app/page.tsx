import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-white py-10 md:mb-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between space-x-20">
            <div className="flex items-center justify-start text-center lg:text-left mt-40 lg:mt-0 lg:w-2/4">
              <div>
                <h1 className="font-black text-gray-900 text-3xl md:text-6xl leading-normal mb-6">Charity for the <br /> world better life</h1>
                <p className="font-light text-gray-900 text-lg md:text-lg leading-normal mb-12">We provide a trusted donation channel for people worldwide to support individuals and organizations.</p>
                <button className="px-6 py-4 mb-1 bg-red-500 text-white font-semibold text-lg rounded-xl hover:bg-red-700 transition ease-in-out duration-500">Get started</button>
              </div>
            </div>
            <div className="flex items-center w-11/12 justify-center lg:w-2/4 m-0 lg:m-4">
              <img src="/charity.jpg" alt="Image" className="rounded-2xl w-75 mx-auto lg:m-0" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature section --> */}
      <section className="bg-zinc-100 py-16 md:mt-10">

        <div className="container max-w-screen-xl mx-auto px-4">

          <p className="font-medium text-gray-500 text-lg md:text-lg text-center uppercase mb-6">Our features</p>

          <h1 className="font-bold text-gray-900 text-3xl md:text-3xl text-center leading-normal mb-10">We believe we can save <br /> more life with you</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-10 py-6 flex justify-center bg-opacity-30 text-red-700 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e03d3d" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                </div>
              </div>

              <h4 className="font-bold text-lg md:text-2xl text-gray-900 mb-6">Transparent</h4>

              <p className="font-light text-gray-900 text-lg md:text-lg mb-6">Donations and distributions can be seen transparently</p>

              <div className="flex justify-center">
                <Link href="#" className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-red-500 hover:text-white transition ease-linear duration-500">
                  Learn more
                  <i className="fa-solid text-xl fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-10 py-6 flex justify-center bg-opacity-30 text-red-700 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e03d3d" d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" /></svg>
                </div>
              </div>

              <h4 className="font-bold text-lg md:text-2xl text-gray-900 mb-6">Quick Fundraise</h4>

              <p className="font-light text-gray-900 text-lg md:text-lg mb-6">The simple and quickest way to make a donation</p>

              <div className="flex justify-center">
                <Link href="#" className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-red-500 hover:text-white transition ease-linear duration-500">
                  Learn more
                  <i className="fa-solid text-xl fa-chevron-right"></i>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-10 py-6 flex justify-center bg-opacity-30 text-red-700 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e03d3d" d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" /></svg>
                </div>
              </div>

              <h4 className="font-bold text-lg md:text-2xl text-gray-900 mb-6">Real Time</h4>

              <p className="font-light text-gray-900 text-lg md:text-lg mb-6">Reports related to donations and distribution are updated directly</p>

              <div className="flex justify-center">
                <Link href="#" className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-red-500 hover:text-white transition ease-linear duration-500">
                  Learn more
                  <i className="fa-solid text-xl fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* </div> <!-- container.// --> */}
        </div>
      </section>
      {/* <!-- feature section //end --> */}
      <section className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <p className="font-medium text-gray-500 text-lg md:text-lg text-center uppercase mb-6">Projects</p>
          <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-6">Latest to donate</h1>
          <p className="font-medium text-gray-500 text-lg md:text-lg text-center mb-16">Current project your can jump in on.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

              <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Help flood victims in <br /> Indonesia</h4>

              <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Help flood victims in Indonesia by <br /> donating sincerely, regardless of the...</p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-800 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$25000</span></h6>

                <h6 className="font-light text-gray-800 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$21000</span></h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-red-500 opacity-10 rounded-lg absolute "></div>

                  <div className="w-56 h-2 bg-red-500 rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">84%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-red-500 hover:text-white text-lg rounded-xl hover:bg-red-500 transition ease-in-out duration-500">Donate</button>
            </div>
            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

              <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Donation for COVID-19 in <br /> Indonesia</h4>

              <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Donation for COVID-19 in Indonesia by <br /> donating sincerely, regardless of the...</p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-800 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$24000</span></h6>

                <h6 className="font-light text-gray-800 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$19000</span></h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-red-500 opacity-10 rounded-lg absolute "></div>

                  <div className="w-52 h-2 bg-red-500 rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">80%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-red-500 hover:text-white text-lg rounded-xl hover:bg-red-500 transition ease-in-out duration-500">Donate</button>
            </div>
            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

              <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Help homeless cat to find <br /> home</h4>

              <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Help homeless cat and the oether <br /> animals by donating sincerely regar...</p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-800 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$15000</span></h6>

                <h6 className="font-light text-gray-800 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$13000</span></h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-red-500 opacity-10 rounded-lg absolute "></div>

                  <div className="w-60 h-2 bg-red-500 rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">86%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-red-500 hover:text-white text-lg rounded-xl hover:bg-red-500 transition ease-in-out duration-500">Donate</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Donate --> */}
      <section className="bg-zinc-100 py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between space-x-16">
            <div className="flex items-center justify-center">
              <img src="/uplift.jpg" alt="Image" className="h-[600px]" />
            </div>
            <div className="mt-4 mx-16">
              <h1 className="font-semibold text-gray-900 text-xl md:text-4xl mb-20">You can help lots of people by <br /> donating</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
                <div className="mb-5 md:mb-0">
                  <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                    <i className="fa-solid text-2xl fa-sun"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">10000+</h3>
                  <p className="font-light text-gray-800 text-md md:text-lg">Fundraising campaign in <br /> all time</p>
                </div>
                <div>
                  <div className="w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4">
                    <i className="fa-solid text-2xl fa-award text-red-500"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">$120M+</h3>
                  <p className="font-light text-gray-800 text-md md:text-lg">Raised and counting <br /> donations in all time</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20">
                <div className="mb-5 md:mb-0">
                  <div className="w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4">
                    <i className="fa-solid text-2xl fa-users text-yellow-500"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">1200+</h3>
                  <p className="font-light text-gray-800 text-md md:text-lg">Our volunteer around the <br /> world</p>
                </div>
                <div>
                  <div className="w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4">
                    <i className="fa-solid text-2xl fa-arrow-trend-up text-green-500"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">98%</h3>
                  <p className="font-light text-gray-800 text-md md:text-lg">Positive review from <br /> public</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- News --> */}
      <section>
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3"></div>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                News & Updates
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Stay updated with our latest activities and initiatives aimed at making a positive impact.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt="Charity Event"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-base font-semibold text-red-600">
                      <a href="#" className="">
                        Article
                      </a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-bold text-gray-900 hover:text-red-500">Community Outreach Program</p>
                      <p className="mt-3 text-lg text-gray-500">
                        Our latest community outreach program provided essential supplies and support to over 500 families in need.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt="Volunteer Work"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-base font-semibold text-red-600">
                      <a href="#" className="">
                        Video
                      </a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-bold text-gray-900 hover:text-red-500">Volunteering at Local Shelter</p>
                      <p className="mt-3 text-lg text-gray-500">
                        Watch our volunteers in action as they provide care and support at the local shelter.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt="Charity Run"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-base font-semibold text-red-600">
                      <a href="#" className="">
                        Case Study
                      </a>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-bold text-gray-900 hover:text-red-500">Charity Run Success Story</p>
                      <p className="mt-3 text-lg text-gray-500">
                        Our annual charity run was a huge success, raising over $50,000 for local schools and educational programs.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section>
        <div className="bg-zinc-100 px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Contact Us</h1>
            <p className="mt-3 text-lg text-gray-600">Feature request? Suggestion? or maybe you&apos;d like to be our critic! Here&apos;s a form just for that.</p>
          </div>
          <form className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-base font-semibold leading-6 text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input required type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Your First Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-base font-semibold leading-6 text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input required type="text" name="last-name" id="last-name" autoComplete="family-name" placeholder="Your Last Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-base font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input required type="email" name="email" id="email" autoComplete="email" placeholder="Your Email Address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-base font-semibold leading-6 text-gray-900">Phone number</label>
                <div className="mt-2.5">
                  <input required type="tel" name="phone" id="phone" autoComplete="tel" placeholder="Your Phone Number" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-base font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} placeholder="Share your thoughts..." className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white rounded-sm py-2 text-lg font-semibold w-full block">Submit →</button>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- Partners --> */}
      <section>
        <div className="bg-white w-full px-4 pt-32 pb-32" id="partners">
          <h2 className="text-4xl font-bold text-center">Our Partners</h2>
          <p className="pt-6 pb-8 text-lg max-w-2xl text-center m-auto">
            We are proud to collaborate with these esteemed partners who share our passion for making a positive impact in the lives of those in need.
          </p>

          <div className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <Link href="https://www.apple.com" target="_blank" className="block">
              <img
                alt="Apple"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/442910/brand-apple.svg"
              />
            </Link>
            <Link href="https://www.pixar.com" target="_blank" className="block">
              <img
                alt="Pixar"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
              />
            </Link>
            <Link href="https://www.geforce.com" target="_blank" className="block">
              <img
                alt="Geforce"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
              />
            </Link>
            <Link href="https://www.ethereum.org" target="_blank" className="block">
              <img
                alt="Ethereum"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
              />
            </Link>
            <Link href="https://line.me" target="_blank" className="block">
              <img
                alt="Line"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443206/brand-line.svg"
              />
            </Link>
            <Link href="https://www.slack.com" target="_blank" className="block">
              <img
                alt="Slack"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/519278/slack.svg"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
