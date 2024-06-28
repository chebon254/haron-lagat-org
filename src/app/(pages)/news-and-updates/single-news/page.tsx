import React from 'react'

function page() {
    return (
        <section >
            <div className="container max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">



                {/* <!--Title--> */}
                <div className="text-center pt-16 md:pt-32">
                    <p className="text-sm md:text-base text-red-500 font-bold">News & updates</p>
                    <h1 className="font-bold break-normal text-3xl md:text-5xl">Welcome to Ghostwind CSS</h1>
                </div>

                {/* <!--image--> */}
                <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: "url('/image/educational-materials.jpg')", height: '75vh' }}
                ></div>

                {/* <!--Container--> */}
                <div className="container max-w-5xl mx-auto -mt-32">

                    <div className="mx-0 sm:mx-6">

                        <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
                        >

                            {/* <!--Post Content--> */}


                            {/* <!--Lead Para--> */}
                            <p className="text-2xl md:text-3xl mb-5">
                                Welcome fellow <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindcss.com">Tailwind CSS</a> and <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.ghost.org">Ghost</a> fan.  This starter template is an attempt to replicate the default Ghost theme <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
                            </p>

                            <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>

                            <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

                            <ol>
                                <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                                <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                                <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                            </ol>

                            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                                Crocodiles are easy. They try to kill and eat you. People are harder. Sometimes they pretend to be your friend first.
                                <br /> - Steve Irwin</blockquote>

                        </div>


                        {/* <!--Author--> */}
                        <div className="flex w-full items-center font-sans p-8 md:p-24">
                            <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                                <div className="flex-1">
                                    <p className="text-base font-bold md:text-xl leading-none">Haron Lagat Organization</p>
                                    <p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
                                </div>
                                <div className="justify-end">

                                </div>
                                {/* <!--/Author--> */}

                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default page