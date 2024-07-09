"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactUs() {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY as string;

  const { submit: onSubmit } = useWeb3Forms({
    // access_key: accessKey,
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
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center mt-16">
            <p className="font-medium text-red-500">Contact us</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Get in touch</h1>
            <p className="mt-3 text-lg text-gray-600">Our friendly team is always here to chat.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-red-500 rounded-full bg-red-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
              <p className="mt-2 text-gray-500 text-base">Our friendly team is here to help.</p>
              <p className="mt-2 text-red-500">Info@haronlagat.com</p>
              <p className="mt-2 text-red-500">contact@chebonkelvin.com</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-red-500 rounded-full bg-red-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
              <p className="mt-2 text-gray-500 text-base">Our HQ.</p>
              <p className="mt-2 text-red-500">6228 dancing water Drive Colorado Springs, Colorado USA 80911</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-red-500 rounded-full bg-red-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
              <p className="mt-2 text-gray-500 text-base">Mon-Fri from 8am to 5pm.</p>
              <p className="mt-2 text-red-500">+1 (806) 787-6905</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Form --> */}
      <section>
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <p className="mt-3 text-lg text-gray-600">Feature request? Suggestion? or maybe you&apos;d like to be our critic! Here&apos;s a form just for that.</p>
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
    </>
  );
}

export default ContactUs;
