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
                            <img src="/Toilet.jpeg" alt="School Built" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Toilets Built</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">We have successfully constructed modern toilets for schools, significantly improving the capacity to accommodate a large number of students while ensuring the maintenance of excellent hygiene and health standards.</p>
                            <Link href="/projects/toilets-gallery" className="w-[180px] text-center rounded-lg bg-red-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-red-600">View Gallery</Link>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/proposed-one.jpeg" alt="School Built" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Upcoming Fundraiser</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">KAPTIONY Secondary School in Marakwet, a school that highly esteemed, plans are for 2025 mega fundraising event to build modern classrooms and a laboratory, enhancing educational resources for students.</p>
                            <Link href="projects/proposed-plan" className="w-[180px] text-center rounded-lg bg-red-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-red-600">View Gallery</Link>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/event.jpeg" alt="School Built" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Christmass Celebration</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">On Christmas Day, we provided meals, clothes, and necessities to families in need, ensuring they had essential support and joy during the holiday season.</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/school.jpeg" alt="Food Donations" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Food Donations</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">Our food donation drives have distributed over 1000 meals to families, ensuring that no child goes to bed hungry.</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/scholarship.jpg" alt="Scholarships" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Scholarships</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">We have awarded over scholarships to deserving students, helping them pursue higher education and achieve their dreams. Also connected some of them to schools in United States of America</p>
                        </div>
                        <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
                            <img src="/image/Haron/children running.jpeg" alt="Sports Programs" className="mb-6 hover:opacity-75 transition ease-in-out duration-500 w-full h-[340px] rounded-md" />
                            <h4 className="font-bold text-gray-900 text-lg md:text-2xl mb-6">Sports Programs</h4>
                            <p className="font-light text-gray-800 text-sm md:text-md lg:text-lg mb-10">We have an upcoming sports tournament featuring volleyball matches, where teams will compete against each other, and the winner will be awarded a gifts.</p>
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