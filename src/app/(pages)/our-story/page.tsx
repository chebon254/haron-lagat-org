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
                            Our journey began over 30 years ago when we discovered that our son, Max, had a learning and thinking difference. Through personal experience, we encountered the challenges and uncertainties that so many others in similar situations face. This journey is ongoing and lifelong.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            From this experience, three key insights emerged. First, we learned how swiftly life changes upon recognizing a learning and thinking difference and how much there is to comprehend. Second, we realized the difficulty in accessing necessary information and support for our child—something millions of other parents also grapple with. Third, we witnessed firsthand the remarkable strengths that arise from these differences, as exemplified by Max. Today, with the support we provided, Max thrives. Along this path, we discovered newfound strengths, a sense of purpose, and a supportive community.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            These insights inspired us to create Understood—an initiative dedicated to offering parents and families worldwide the resources, expertise, and community that were once scarce.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            Admittedly, we embarked on this journey uncertain of its destination. Yet, we understood that everyone knows someone affected by a learning and thinking difference—our children, siblings, friends, neighbors, and colleagues. If we didn&quot;t act, these individuals could face increased risks such as bullying, academic struggles, or unemployment, hindering their ability to thrive.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            Your visit to our site today signals your concern for learning and thinking differences. Perhaps you seek understanding to support others. Both understanding and taking action are crucial steps toward creating a more inclusive world for those with diverse learning styles—offering them solace and recognition.
                        </p>
                        <p className="mt-3 text-lg text-gray-600 my-1 w-75 mx-auto mb-3">
                            As parents, we&quot;ve witnessed firsthand that when individuals with learning and thinking differences thrive, those around them thrive as well. This ripple effect contributes to a better world for all.
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