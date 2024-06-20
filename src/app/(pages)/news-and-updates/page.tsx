function newsUpdates() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 pt-12 pb-2 mx-auto">
          <div className="text-center">
            <p className="font-medium text-orange-500">Articles</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">News & Updates</h1>

            <p className="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
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
                    <p className="text-sm text-gray-500">Creative Director</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800">
                What do you want to know about UI
              </h1>

              <hr className="w-32 my-6 text-orange-500" />

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore
              </p>

              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">Arthur Melo</h1>
                    <p className="text-sm text-gray-500">Creative Director</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800">
                All the features you want to know
              </h1>

              <hr className="w-32 my-6 text-orange-500" />

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore
              </p>

              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div className="relative">
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />

                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700">Amelia Anderson</h1>
                    <p className="text-sm text-gray-500">Lead Developer</p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800">
                Which services you get from Meraki UI
              </h1>

              <hr className="w-32 my-6 text-orange-500" />

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore
              </p>

              <a href="#" className="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default newsUpdates;
