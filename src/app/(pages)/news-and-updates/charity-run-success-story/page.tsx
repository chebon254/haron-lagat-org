import React from 'react';

function CharityRunSuccessStory() {
    return (
        <section className="container max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-red-500 font-bold">News & updates</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Charity Run Success Story</h1>
            </div>

            {/* Image */}
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: "url('/image/donation-6.png')", height: '75vh' }}></div>

            {/* Content */}
            <div className="container max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                        <p className="text-2xl md:text-3xl mb-5">
                            Our annual charity run was a huge success, raising over $50,000 for local schools and educational programs. Participants from across the community came together to support this important cause.
                        </p>

                        <p className="py-6">
                            The funds raised will directly benefit local schools, providing resources for educational programs and initiatives that enhance learning opportunities for students.
                        </p>

                        <p className="py-6">
                            This achievement reflects the collective effort and generosity of our supporters, sponsors, and participants who believe in the power of education to transform lives and build a stronger community.
                        </p>

                        <ol>
                            <li className="py-3">
                                The success of this event underscores our commitment to supporting education and fostering a culture of philanthropy within our community.
                            </li>
                            <li className="py-3">
                                Moving forward, we remain dedicated to expanding our impact and creating more opportunities for educational growth and development.
                            </li>
                        </ol>

                        <blockquote className="border-l-4 border-red-500 italic my-8 pl-8 md:pl-12">
                            "Education is the most powerful weapon which you can use to change the world."
                            <br /> - Nelson Mandela
                        </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex w-full items-center font-sans p-8 md:p-24">
                        <img className="w-10 h-10 rounded-full mr-4" src="/image/Avatar.png" alt="Avatar of Author" />
                        <div className="flex-1">
                            <p className="text-base font-bold md:text-xl leading-none">Haron Lagat Organization</p>
                            <p className="text-gray-600 text-xs md:text-base">
                                Article written by haron lagat organization <a className="text-gray-800 hover:text-red-500 no-underline border-b-2 border-red-500" href="http://www.haronlagat.org">http://www.haronlagat.org</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharityRunSuccessStory;
