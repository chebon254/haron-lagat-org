import React from 'react';
import Link from 'next/link';

function projects() {
    return (
        <>
            <section className="bg-white py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-8 mt-16">
                        <p className="font-medium text-red-500">Projects</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Our Accomplishments</h1>
                        <p className="mt-3 text-lg text-gray-600">Current projects you can jump in on.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/school.jpeg" alt="School Built" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Schools Built</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">We have successfully built over 50 schools in various communities across Kenya, providing quality education to over 20,000 children.</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/event.jpeg" alt="Food Donations" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Food Donations</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our food donation drives have distributed over 100,000 meals to families in need, ensuring that no child goes to bed hungry.</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/scholarship.jpg" alt="Scholarships" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Scholarships</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">We have awarded over 500 scholarships to deserving students, helping them pursue higher education and achieve their dreams.</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/children running.jpeg" alt="Sports Programs" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Sports Programs</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our sports programs have engaged over 3,000 children, promoting physical health, teamwork, and leadership skills through various sporting activities.</p>
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
            </section >
        </>
    )
}

export default projects