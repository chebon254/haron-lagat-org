function newsUpdates() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 pt-12 pb-2 mx-auto">
          <div className="text-center mb-8 mt-16">
            <p className="font-medium text-orange-500">Articles</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">News & Updates</h1>
            <p className="mt-3 text-lg text-gray-600">Stay informed about our latest efforts and accomplishments in supporting those in need.</p>
          </div>
        </div>
      </section>
      <section className="bg-white mb-16">
        <div className="container px-6 py-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">Tom Hank</h1>
                    <p className="text-base text-gray-500">Creative Director</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-bold text-gray-800">Impact of Our Educational Programs</h1>
              <hr className="w-32 my-6 text-orange-500" />
              <p className="text-base text-gray-500">Discover how our educational initiatives are empowering communities and creating opportunities for a brighter future.</p>
              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">Arthur Melo</h1>
                    <p className="text-base text-gray-500">Community Outreach Coordinator</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-bold text-gray-800">Healthcare Initiatives in Rural Areas</h1>
              <hr className="w-32 my-6 text-orange-500" />
              <p className="text-base text-gray-500">Learn about our efforts to provide essential healthcare services to underserved communities.</p>
              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">Amelia Anderson</h1>
                    <p className="text-base text-gray-500">Lead Developer</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-xl font-bold text-gray-800">Volunteer Stories: Making a Difference</h1>
              <hr className="w-32 my-6 text-orange-500" />
              <p className="text-base text-gray-500">Read inspiring stories from our volunteers who are making a significant impact through their dedication and hard work.</p>
              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
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
  );
}

export default newsUpdates;
