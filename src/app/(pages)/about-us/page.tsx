import React from 'react';
import Link from 'next/link';

function aboutPage() {
  return (
    <>
      <section>
        <div className="bg-red-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <p className=" text-white">About</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">We Work Together</h2>
                <p className="text-lg leading-8 text-gray-300">Join us in making a difference by supporting various charitable causes around the world.</p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Children helped since the year 2005</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">300Kids</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Meals on Christmas since the year 2005</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">1k+</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">Volunteers</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">500</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">We Are a Non-Profit Organization</h2>
              <p className="mt-4 text-gray-600 text-lg">Our mission is to provide essential resources and support to underprivileged communities. From educational programs to sporting services, we are dedicated to improving lives.</p>
              
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/katt.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <img src="/image/Haron/elders.jpeg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">We Are a Strong Team</h2>
              <p className="mt-4 text-gray-600 text-lg">Our team is composed of dedicated individuals who work tirelessly to achieve our mission. Together, we strive to create a positive impact and bring about meaningful change.</p>

            </div>
          </div>
        </div>
      </section>

       x
    </>
  )
}

export default aboutPage
