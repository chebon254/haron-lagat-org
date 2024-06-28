"use client";

import router, { useRouter } from "next/router";
import ArrowIcon from "@/Components/Arrow";
import BookIcon from "@/Components/Book";
import ComputerIcon from "@/Components/Computer";
import ScholarshipIcon from "@/Components/Scholarship";
import SchoolIcon from "@/Components/School";
import Link from "next/link";

export default function Home() {
  const handleArticleClick = (title: string) => {
    router.push(`/news-and-updates/${encodeURIComponent(title)}`);
  };
  return (
    <>
      <section className="bg-white m-8 py-10 md:mb-10">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between space-y-4">
            <div className="flex flex-col justify-center items-center space-y-8 lg:text-left lg:mt-0 lg:w-50">
              <h1 className="font-black text-gray-900 text-3xl md:text-6xl leading-normal">
                Education for Every Child
              </h1>
              <p className="font-light text-gray-900 text-lg md:text-lg leading-normal">
                We believe every child deserves access to quality education.
                Our mission is to provide quality educational opportunities to
                children and young adults in Kenya, empowering them to build a
                better future. Join us in our endeavor to make education
                accessible to all.
              </p>  
              <Link href="/contact-us" className="px-6 py-4 bg-red-500 text-white font-semibold text-lg rounded-xl hover:bg-red-500 transition ease-in-out duration-500">
                Get started
              </Link>
            </div>
            <div className="hidden">
              <img
                src="/charity.jpg"
                alt="Image"
                className="rounded-2xl w-75"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- feature section --> */}
      <section className="bg-white ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold">HOW DO WE HELP?</h1>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <SchoolIcon className="w-16 mt-8" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Building and Renovating Schools</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">We aim to construct new schools and renovate existing ones in underserved areas to provide safe and conducive learning environments.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read more
                  <ArrowIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />

                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <ScholarshipIcon className="w-16 mt-8" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Scholarships and Sponsorships</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">We plan to offer scholarships and sponsorships to students from low-income families, ensuring that financial barriers do not hinder their educational journey.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read more
                  <ArrowIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <BookIcon className="w-16 mt-8" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Supplying Educational Materials</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Many students lack basic educational resources. We will supply textbooks, uniforms, and other essential materials to enhance the learning experience.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read more
                  <ArrowIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <ComputerIcon className="w-16 mt-8" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Technology Integration</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">To prepare students for the future, we aim to integrate technology into classrooms by providing computers and internet access, and training students and teachers in digital literacy.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                  Read more
                  <ArrowIcon className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                </a>
              </div>
            </div>
          </div>
          {/* </div> <!-- container.// --> */}
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-screen-xl mx-auto">
          <div className="m-8 font-medium ">
            <h1 className="text-3xl text-center capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">Reasons to trust our <span className="text-red-500">commitment</span> & mission</h1>

            <h3 className="mt-5 font-semibold text-2xl text-center capitalize">Community engagement</h3>
            <p className="text-center">Involving local communities to drive grassroots initiatives and foster inclusive development</p>

            <h1 className="mt-5 font-semibold text-2xl text-center capitalize">Dedicated team</h1>
            <p className="text-center">Passionate professionals committed to making a real difference</p>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3"></div>
          </div>
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                News & Updates
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Stay updated with our latest activities and initiatives aimed at
                making a positive impact.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Community Outreach Program",
                content: "Our latest community outreach program provided essential supplies and support to over 500 families in need.",
                img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              },
              {
                title: "Volunteering at Local Shelter",
                content: "Watch our volunteers in action as they provide care and support at the local shelter.",
                img: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              },
              {
                title: "Charity Run Success Story",
                content: "Our annual charity run was a huge success, raising over $50,000 for local schools and educational programs.",
                img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              }
            ].map((article, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={article.img} alt={article.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-base font-semibold text-red-600">
                      <a href="" onClick={() => handleArticleClick(article.title)}>
                        Article
                      </a>
                    </p>
                    <a href="" onClick={() => handleArticleClick(article.title)} className="mt-2 block">
                      <p className="text-xl font-bold text-gray-900 hover:text-red-500">{article.title}</p>
                      <p className="mt-3 text-lg text-gray-500">{article.content}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section>
        <div className="bg-zinc-100 px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Feature request? Suggestion? or maybe you&apos;d like to be our
              critic! Here&apos;s a form just for that.
            </p>
          </div>
          <form className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-base font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Your First Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-base font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Your Last Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-base font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your Email Address"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-base font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Your Phone Number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-base font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Share your thoughts..."
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-base sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-red-600 text-white rounded-sm py-2 text-base w-full block"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- Partners --> */}
      <section>
        <div className="bg-white w-full px-4 pt-32 pb-32" id="partners">
          <h2 className="text-4xl font-bold text-center">Our Partners</h2>
          <p className="pt-6 pb-8 text-lg max-w-2xl text-center m-auto">
            We are proud to collaborate with these esteemed partners who share
            our passion for making a positive impact in the lives of those in
            need.
          </p>

          <div className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <Link
              href="https://www.apple.com"
              target="_blank"
              className="block"
            >
              <img
                alt="Apple"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/442910/brand-apple.svg"
              />
            </Link>
            <Link
              href="https://www.pixar.com"
              target="_blank"
              className="block"
            >
              <img
                alt="Pixar"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
              />
            </Link>
            <Link
              href="https://www.geforce.com"
              target="_blank"
              className="block"
            >
              <img
                alt="Geforce"
                className="h-20 mx-auto"
                src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
              />
            </Link>
            <Link
              href="https://www.ethereum.org"
              target="_blank"
              className="block"
            >
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
            <Link
              href="https://www.slack.com"
              target="_blank"
              className="block"
            >
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
