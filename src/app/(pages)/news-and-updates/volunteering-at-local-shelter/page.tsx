import React from 'react';

function VolunteeringAtLocalShelter() {
    return (
        <section className="container max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-red-500 font-bold">News & updates</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Volunteering at Local Shelter</h1>
            </div>

            {/* Image */}
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: "url('/image/Haron/event.jpeg')", height: '75vh' }}></div>

            {/* Content */}
            <div className="container max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                        <p className="text-2xl md:text-3xl mb-5">
                            Watch our volunteers in action as they provide care and support at the local shelter. Our dedicated team works tirelessly to ensure that every individual receives the assistance they need.
                        </p>

                        <p className="py-6">
                            At the heart of our volunteer efforts is compassion and commitment to serving the community. Whether it&apos;s providing meals, organizing activities, or offering emotional support, our volunteers make a profound difference in the lives of shelter residents.
                        </p>

                        <p className="py-6">
                            Through their selfless contributions, our volunteers exemplify the spirit of empathy and solidarity. Their efforts inspire hope and create a supportive environment where everyone feels valued and cared for.
                        </p>

                        <ol>
                            <li className="py-3">
                                Our volunteer program continues to grow, thanks to the dedication and passion of our volunteers who embody the values of kindness and generosity.
                            </li>
                            <li className="py-3">
                                Together, we strive to build a community where everyone has access to essential resources and opportunities for a brighter future.
                            </li>
                        </ol>

                        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                        &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
                            <br /> - Mahatma Gandhi
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

export default VolunteeringAtLocalShelter;
