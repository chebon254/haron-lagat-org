import Image from 'next/image'
import React from 'react'

function team() {
  return (
    <>
      <section id="our-team" className="bg-gray-100 py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="font-medium text-red-500">Our Team</p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Meet Our Dedicated Team</h1>

            <p className="mt-3 text-lg text-gray-600">Get to know the friendly faces behind Haron Lagat Organization.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/1.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700">Executive Director</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" alt="Team Member 2" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Program Coordinator</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/3.jpg" alt="Team Member 3" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-700">Marketing and Communications Manager</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" alt="Team Member 4" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
              <p className="text-gray-700">Fundraising Coordinator</p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/5.jpg" alt="Team Member 5" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
              <p className="text-gray-700">Volunteer Coordinator</p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/6.jpg" alt="Team Member 6" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
              <p className="text-gray-700">Community Outreach Specialist</p>
            </div>

            {/* Team Member 7 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/7.jpg" alt="Team Member 7" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-700">Grant Writer</p>
            </div>

            {/* Team Member 8 */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <img src="https://spacema-dev.com/elevate/assets/images/team/8.jpg" alt="Team Member 8" className="w-full rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
              <p className="text-gray-700">Finance Manager</p>
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
                <button type="button" className="w-[180px] text-center rounded-lg bg-red-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-red-600">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default team