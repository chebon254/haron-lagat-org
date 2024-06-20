import React from 'react'

function projects() {
    return (
        <section className="bg-white py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">Latest to donate</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                        <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

                        <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">Help flood victims in <br /> Indonesia</h4>

                        <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">Help flood victims in Indonesia by <br /> donating sincerely, regardless of the...</p>

                        <div className="flex items-center justify-between mb-8">
                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$25000</span></h6>

                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$21000</span></h6>
                        </div>

                        <div className="hidden md:block lg:flex items-center justify-between mb-8">
                            <div>
                                <div className="w-72 h-2 bg-orange-500 opacity-10 rounded-lg absolute "></div>

                                <div className="w-56 h-2 bg-orange-500 rounded-lg relative"></div>
                            </div>

                            <p className="font-light text-gray-900 text-md">84%</p>
                        </div>

                        <button className="w-full py-4 bg-info font-semibold text-orange-500 hover:text-white text-lg rounded-xl hover:bg-orange-500 transition ease-in-out duration-500">Donate</button>
                    </div>
                    <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                        <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

                        <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">Donation for COVID-19 in <br /> Indonesia</h4>

                        <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">Donation for COVID-19 in Indonesia by <br /> donating sincerely, regardless of the...</p>

                        <div className="flex items-center justify-between mb-8">
                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$24000</span></h6>

                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$19000</span></h6>
                        </div>

                        <div className="hidden md:block lg:flex items-center justify-between mb-8">
                            <div>
                                <div className="w-72 h-2 bg-orange-500 opacity-10 rounded-lg absolute "></div>

                                <div className="w-52 h-2 bg-orange-500 rounded-lg relative"></div>
                            </div>

                            <p className="font-light text-gray-900 text-md">80%</p>
                        </div>

                        <button className="w-full py-4 bg-info font-semibold text-orange-500 hover:text-white text-lg rounded-xl hover:bg-orange-500 transition ease-in-out duration-500">Donate</button>
                    </div>
                    <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                        <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500" />

                        <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">Help homeless cat to find <br /> home</h4>

                        <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">Help homeless cat and the oether <br /> animals by donating sincerely regar...</p>

                        <div className="flex items-center justify-between mb-8">
                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Goals : <span className="font-semibold text-gray-900 text-md md:text-lg">$15000</span></h6>

                            <h6 className="font-light text-gray-400 text-sm md:text-lg">Raised : <span className="font-semibold text-gray-900 text-md md:text-lg">$13000</span></h6>
                        </div>

                        <div className="hidden md:block lg:flex items-center justify-between mb-8">
                            <div>
                                <div className="w-72 h-2 bg-orange-500 opacity-10 rounded-lg absolute "></div>

                                <div className="w-60 h-2 bg-orange-500 rounded-lg relative"></div>
                            </div>

                            <p className="font-light text-gray-900 text-md">86%</p>
                        </div>

                        <button className="w-full py-4 bg-info font-semibold text-orange-500 hover:text-white text-lg rounded-xl hover:bg-orange-500 transition ease-in-out duration-500">Donate</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button className="px-7 py-4 font-semibold bg-orange-500 text-white rounded-2xl hover:bg-range-300 hover:text-white transition ease-in-out duration-500">More Causes</button>
                </div>
            </div>
        </section>
    )
}

export default projects