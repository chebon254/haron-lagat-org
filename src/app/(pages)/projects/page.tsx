import React from 'react';
import Link from 'next/link';

function projects() {
    return (
        <>
            <section className="bg-white py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-8 mt-16">
                        <p className="font-medium text-red-500">Projects</p>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Latest to donate</h1>

                        <p className="mt-3 text-lg text-gray-600">Current project your can jump in on.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Support education in Africa</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects focus on improving access to education for children in underserved regions. We believe that education is a fundamental right and a key to breaking the cycle of poverty.</p>
                        </div>

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Feed the hungry in India</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects are dedicated to combating hunger and malnutrition. We work tirelessly to provide nutritious meals to those in need, ensuring that no one goes to bed hungry.</p>
                        </div>

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Provide clean water in Latin America</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects address the critical need for clean and safe drinking water. We implement sustainable solutions to ensure that communities have access to this basic necessity.</p>
                        </div>

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Aid refugees in Europe</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects are committed to supporting refugees fleeing conflict and persecution. We provide essential services such as shelter, food, and medical care to help them rebuild their lives.</p>
                        </div>

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Protect wildlife in Australia</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects focus on the conservation of wildlife and their habitats. We work to protect endangered species and promote biodiversity through various initiatives.</p>
                        </div>

                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/donation-4.png" alt="Image" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />

                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Build homes for the homeless in USA</h4>

                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our charity oriented projects aim to provide safe and stable housing for the homeless. We believe that everyone deserves a place to call home and work towards making this a reality for all.</p>
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
            </section >
        </>
    )
}

export default projects