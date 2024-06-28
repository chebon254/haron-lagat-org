import React from 'react';

function CommunityOutreachProgram() {
    return (
        <section className="container max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-red-500 font-bold">News & updates</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Community Outreach Program</h1>
            </div>

            {/* Image */}
            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: "url('/image/donation-1.jpg')", height: '75vh' }}></div>

            {/* Content */}
            <div className="container max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                        <p className="text-2xl md:text-3xl mb-5">
                            Our latest community outreach program provided essential supplies and support to over 500 families in need. The program aimed to alleviate the challenges faced by vulnerable families by distributing food, hygiene products, and educational materials.
                        </p>























                        <p className="py-6">
                            In collaboration with local businesses and volunteers, we successfully reached out to neighborhoods most affected by economic hardship. Families expressed deep gratitude for the assistance, emphasizing how it has positively impacted their daily lives.
                        </p>

                        <p className="py-6">
                            Through this initiative, we not only provided immediate relief but also fostered a sense of community solidarity. Volunteers played a crucial role in organizing and delivering aid, reflecting our commitment to serving those in need.
                        </p>

                        <ol>
                            <li className="py-3">
                                Our efforts were met with overwhelming support from the community, demonstrating the power of collective action in addressing social challenges.
                            </li>
                            <li className="py-3">
                                Moving forward, we remain dedicated to expanding our outreach programs and creating sustainable solutions to support vulnerable families.
                            </li>
                            <li className="py-3">
                                Together, we can build a stronger and more resilient community where every individual has access to essential resources and opportunities for a brighter future.
                            </li>
                        </ol>

                        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                            "Alone, we can do so little; together, we can do so much."
                            <br /> - Helen Keller
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

export default CommunityOutreachProgram;
