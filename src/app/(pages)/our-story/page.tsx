import React from 'react';
import Link from 'next/link';

function our_story() {
    return (
        <>
            <section id="our-team" className="bg-gray-100 py-32">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="font-medium text-red-500">Our Story</p>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">What led to this</h1>
                    </div>
                    <div>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            At our core, we believe that every individual deserves the opportunity to flourish, regardless of how they process and learn. Sadly, this isn&quot;t the reality for many of the 70 million people in the United States—approximately 1 in 5—who face learning and thinking differences.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            Our journey began over 25 years ago
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            Welcome to Understood. We&quot;re delighted to have you join us on this meaningful journey.
                        </p>
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
    )
}

export default our_story