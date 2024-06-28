import React from 'react';
import Link from 'next/link';

function programServices() {
  return (
    <>
      <section>
        <div className="bg-red-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Initiatives</h2>
                <p className="text-lg leading-8 text-gray-300">Join us in making a difference by supporting various charitable causes around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Building and Renovating Schools</h2>
              <p className="mt-4 text-gray-600 text-base"><strong>Objective:</strong> To provide safe and conducive learning environments in underserved areas.</p>
              <p className="mt-4 text-gray-600 text-base"><strong>Details:</strong></p>
              <ul className="list-disc pl-5 text-base text-gray-600">
                <li className="py-1">Constructing new schools in areas lacking educational facilities.</li>
                <li className="py-1">Renovating existing schools to improve learning conditions.</li>
                <li className="py-1">Focusing on underserved areas to expand educational access.</li>
                <li className="py-1">Creating safe and stimulating environments for effective learning.</li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/clean-water.jpg" alt="School Building" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Scholarships and Sponsorships</h2>
              <p className="mt-4 text-gray-600 text-base"><strong>Objective:</strong> To ensure financial barriers do not hinder students&apos; educational journeys.</p>
              <p className="mt-4 text-gray-600 text-base"><strong>Details:</strong></p>
              <ul className="list-disc pl-5 text-base text-gray-600">
                <li className="py-1">Offering scholarships to students from low-income families.</li>
                <li className="py-1">Providing sponsorships to cover educational expenses.</li>
                <li className="py-1">Eliminating financial obstacles to education.</li>
                <li className="py-1">Supporting students throughout their academic careers.</li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/scholarship.jpg" alt="Scholarship" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Supplying Educational Materials</h2>
              <p className="mt-4 text-gray-600 text-base"><strong>Objective:</strong> To enhance the learning experience by providing essential educational resources.</p>
              <p className="mt-4 text-gray-600 text-base"><strong>Details:</strong></p>
              <ul className="list-disc pl-5 text-base text-gray-600">
                <li className="py-1">Supplying textbooks to students lacking basic resources.</li>
                <li className="py-1">Providing uniforms to ensure equal access to education.</li>
                <li className="py-1">Distributing other essential learning materials.</li>
                <li className="py-1">Improving overall quality of education through proper resourcing.</li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/educational-materials.jpg" alt="Educational Materials" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technology Integration</h2>
              <p className="mt-4 text-gray-600 text-base"><strong>Objective:</strong> To prepare students for the future by integrating technology into classrooms.</p>
              <p className="mt-4 text-gray-600 text-base"><strong>Details:</strong></p>
              <ul className="list-disc pl-5 text-base text-gray-600">
                <li className="py-1">Providing computers and internet access in classrooms.</li>
                <li className="py-1">Training students in digital literacy skills.</li>
                <li className="py-1">Educating teachers on effective use of technology in teaching.</li>
                <li className="py-1">Bridging the digital divide in underserved communities.</li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="/image/technology-classroom.jpg" alt="Technology in Classroom" className="object-cover rounded-lg shadow-md" />
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
                <img className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
                <img className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
                <img className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
                <img className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
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

export default programServices