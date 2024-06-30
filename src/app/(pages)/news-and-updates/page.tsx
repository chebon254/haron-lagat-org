import React from 'react';
import Link from 'next/link';

function newsUpdates() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 pt-12 pb-2 max-w-6xl mx-auto">
          <div className="text-center mb-8 mt-16">
            <p className="font-medium text-red-500">Articles</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">News & Updates</h1>
            <p className="mt-3 text-lg text-gray-600">Stay informed about our latest efforts and accomplishments in supporting those in need.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="/image/Haron/elder group.jpeg"
                  alt="Charity Event"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-3">
                <div className="flex-1">
                  <a href="news-and-updates/community-outreach-program" className="mt-2 block">
                    <p className="text-xl font-bold text-gray-900 hover:text-red-500">
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
                  src="/image/Haron/event.jpeg"
                  alt="Volunteer Work"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-3">
                <div className="flex-1">
                  <a href="news-and-updates/volunteering-at-local-shelter" className="mt-2 block">
                    <p className="text-xl font-bold text-gray-900 hover:text-red-500">
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
                  src="/image/Haron/school.jpeg"
                  alt="Charity Run"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-3">
                <div className="flex-1">
                  <a href="news-and-updates/charity-run-success-story" className="mt-2 block">
                    <p className="text-xl font-bold text-gray-900 hover:text-red-500">
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
  );
}

export default newsUpdates;
