import React from 'react'

function aboutPage() {
  return (
    <>
      <section>
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">We Work Together</h2>
                <p className="text-lg leading-8 text-gray-300">We can help you grow your audience and your business, no matter the
                  size.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">words written in 2023</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">12 million</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">episodes uploaded</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">10k</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">answers</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">2.1k</dd>
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
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">We Are Non Profit Organization</h2>
              <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
              <div className="mt-8">
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn more about us
                  <span className="ml-2">&#8594;</span></a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">We Are A Strong Team</h2>
              <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
              <div className="mt-8">
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn more about us
                  <span className="ml-2">&#8594;</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="mx-auto py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">Join our
                community now</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Experience the benefits of our community. No
                obligations, just join and explore.</p>
              <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
                <img className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
                <img className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
                <img className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
                <img className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                <span className="!ml-2 font-bold italic text-orange-500">Join these awesome members</span>
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <button type="button" className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-orange-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <span className="absolute -top-5 left-0 w-full text-left text-xs italic text-orange-600">No Obligations</span>Join Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mr-0.5 h-5 w-5">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default aboutPage