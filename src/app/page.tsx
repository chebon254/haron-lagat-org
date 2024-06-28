"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import ArrowIcon from "@/Components/Arrow";
import BookIcon from "@/Components/Book";
import ComputerIcon from "@/Components/Computer";
import ScholarshipIcon from "@/Components/Scholarship";
import SchoolIcon from "@/Components/School";
import Link from "next/link";

export default function Home() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const accessKey = "50067f1d-2178-467e-a368-cdf5e9241c6f";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "HaronLagat Website",
      subject: "New Contact Message",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      setIsLoading(false);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
      setIsLoading(false);
    },
  });

  const handleSubmitWithLoading = async (data: any) => {
    setIsLoading(true);
    await handleSubmit(onSubmit)(data);
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
                <a href="/initiatives" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
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
                <a href="/initiatives" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
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
                <a href="/initiatives" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
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
                <a href="/initiatives" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
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
          <div className="relative mx-auto max-w-7xl">
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
                      <p className="text-xl font-bold text-gray-900">
                        Community Outreach Program
                      </p>
                      <p className="mt-3 text-lg text-gray-500">
                        Our latest community outreach program provided essential
                        supplies and support to over 500 families in need.
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
                      <p className="text-xl font-bold text-gray-900">
                        Volunteering at Local Shelter
                      </p>
                      <p className="mt-3 text-lg text-gray-500">
                        Watch our volunteers in action as they provide care and
                        support at the local shelter.
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
                      <p className="text-xl font-bold text-gray-900">
                        Charity Run Success Story
                      </p>
                      <p className="mt-3 text-lg text-gray-500">
                        Our annual charity run was a huge success, raising over
                        $50,000 for local schools and educational programs.
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Feature request? Suggestion? or maybe you&apos;d like to be our
              critic! Here&apos;s a form just for that.
            </p>
          </div>
          <form className="mx-auto mt-16 max-w-3xl sm:mt-20" onSubmit={handleSubmitWithLoading}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <input type="hidden" name="access_key" value={accessKey} />
              <div>
                <label htmlFor="first-name" className="block text-base font-semibold leading-6 text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Your First Name"
                    {...register("firstName", { required: "First name is required" })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                  />
                  {errors.firstName && <p className="text-red-500">{(errors.firstName as any).message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-base font-semibold leading-6 text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Your Last Name"
                    {...register("lastName", { required: "Last name is required" })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                  />
                  {errors.lastName && <p className="text-red-500">{(errors.lastName as any).message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-base font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your Email Address"
                    {...register("email", { required: "Email is required" })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                  />
                  {errors.email && <p className="text-red-500">{(errors.email as any).message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-base font-semibold leading-6 text-gray-900">Phone number</label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Your Phone Number"
                    {...register("phone", { required: "Phone number is required" })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                  />
                  {errors.phone && <p className="text-red-500">{(errors.phone as any).message}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-base font-semibold leading-6 text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Share your thoughts..."
                    {...register("message", { required: "Message is required" })}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6"
                  ></textarea>
                  {errors.message && <p className="text-red-500">{(errors.message as any).message}</p>}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className={`bg-red-500 hover:bg-red-600 text-white rounded-sm py-2 text-lg font-medium w-full block ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit →"}
              </button>
            </div>

          </form>
          {result && <div className="mt-4 text-center text-green-500 text-lg font-medium py-2 px-16 bg-green-100 mx-auto max-w-3xl rounded-md">{result}</div>}
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
