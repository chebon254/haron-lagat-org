import React from 'react'

function contactUs() {
  return (
    <>

      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center mt-16">
            <p className="font-medium text-orange-500">Contact us</p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Get in touch</h1>

            <p className="mt-3 text-lg text-gray-600">Our friendly team is always here to chat.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-orange-500 rounded-full bg-orange-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
              <p className="mt-2 text-gray-500 text-base">Our friendly team is here to help.</p>
              <p className="mt-2 text-orange-500">hello@merakiui.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-orange-500 rounded-full bg-orange-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
              <p className="mt-2 text-gray-500 text-base">Come say hello at our office HQ.</p>
              <p className="mt-2 text-orange-500">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-orange-500 rounded-full bg-orange-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
              <p className="mt-2 text-gray-500 text-base">Mon-Fri from 8am to 5pm.</p>
              <p className="mt-2 text-orange-500">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact --> */}
      <section>
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
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
              <button type="submit" className="bg-orange-600 text-white rounded-sm py-2 text-base w-full block">Submit →</button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="mx-auto py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">Join our Community Now</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Be a part of our community and help us bring hope and support to those in need. Your involvement makes a difference.</p>
              <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
                <img className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/34.jpg" alt=""/>
                <img className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt=""/>
                <img className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt=""/>
                <img className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/4.jpg" alt=""/>
                <span className="!ml-2 font-bold italic text-orange-500">Join these awesome members</span>
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <button type="button" className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-orange-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <span className="absolute -top-5 left-0 w-full text-left text-xs italic text-orange-600">No Obligations</span>Join Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mr-0.5 h-5 w-5">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path>
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

export default contactUs