function newsUpdates() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 pt-12 pb-2 mx-auto">
          <div className="text-center mb-8 mt-16">
            <p className="font-medium text-red-500">Articles</p>
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
              <hr className="w-32 my-6 text-red-500" />
              <p className="text-base text-gray-500">Discover how our educational initiatives are empowering communities and creating opportunities for a brighter future.</p>
              <a href="#" className="inline-block mt-4 text-red-500 underline hover:text-red-400 font-semibold">Read more</a>
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
              <hr className="w-32 my-6 text-red-500" />
              <p className="text-base text-gray-500">Learn about our efforts to provide essential healthcare services to underserved communities.</p>
              <a href="#" className="inline-block mt-4 text-red-500 underline hover:text-red-400 font-semibold">Read more</a>
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
              <hr className="w-32 my-6 text-red-500" />
              <p className="text-base text-gray-500">Read inspiring stories from our volunteers who are making a significant impact through their dedication and hard work.</p>
              <a href="#" className="inline-block mt-4 text-red-500 underline hover:text-red-400 font-semibold">Read more</a>
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
  );
}

export default newsUpdates;
