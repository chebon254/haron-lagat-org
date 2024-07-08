import React from 'react';
import Link from 'next/link';

function toiletGallery() {
    return (
        <>
            <section className="bg-white py-16">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="text-center mb-8 mt-16">
                        <p className="font-medium text-red-500">Gallery</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"></h1>
                        <p className="mt-3 text-lg text-gray-600">Project images</p>
                        
                    </div>
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
                        <div className=" break-inside-avoid mb-8">
                            <img className="h-auto max-w-full rounded-lg" src="/image/toilet/one.jpeg" alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <img className="h-auto max-w-full rounded-lg" src="/image/toilet/two.jpeg" alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <img className="h-auto max-w-full rounded-lg" src="/image/toilet/three.jpeg" alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <img className="h-auto max-w-full rounded-lg" src="/image/toilet/four.jpeg" alt="Gallery image" />
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

export default toiletGallery