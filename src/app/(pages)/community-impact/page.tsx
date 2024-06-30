import React from 'react';
import Link from 'next/link';

function ourImpact() {
  return (
    <>
      <section>
        <div className="bg-red-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <p className="font-medium text-white">Impact</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Our Impact in Kenya</h2>
                <p className="text-lg leading-8 text-gray-300">See the difference we have made in Kenyan communities through our various initiatives and projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Educational Programs</h2>
              <p className="mt-4 text-gray-600 text-lg">We have established educational programs that have reached over 10,000 children, providing them with quality education and resources to ensure a brighter future.</p>
              <div className="mt-8"></div>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/clean-water.jpg" alt="Education Impact" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <img src="/image/healthcare.jpg" alt="Healthcare Impact" className="object-cover rounded-lg shadow-md" />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Healthcare Services</h2>
              <p className="mt-4 text-gray-600 text-lg">Our healthcare initiatives have provided medical assistance to over 5,000 individuals, improving access to essential health services and enhancing overall well-being.</p>
              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Community Development</h2>
              <p className="mt-4 text-gray-600 text-lg">Through our community development projects, we have empowered local communities by building infrastructure, supporting small businesses, and fostering economic growth.</p>
              <div className="mt-8"></div>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/Haron/elders.jpeg" alt="Community Development Impact" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="bg-white">
          <div className="mx-auto py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">Join our Community Now</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Be a part of our community and help us bring hope and support to those in need. Your involvement makes a difference.</p>
              <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
                <span className="!ml-2 font-bold italic text-red-500">Join these awesome members</span>
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Link href="/contact-us" className="w-[180px] text-center rounded-lg bg-red-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-red-600">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ourImpact