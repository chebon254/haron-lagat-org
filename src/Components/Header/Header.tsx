import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="bg-white py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full lg:w-auto" >
            <Link href="/">
              <Image src="/haronlagat logo.png" alt="Logo" width={180} height={60} />
            </Link>
            <button className="lg:hidden w-10 h-10 ml-4 flex items-center justify-center border border-orange-500 text-orange-500 rounded-md">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className="hidden lg:flex flex-row items-center space-x-8 xl:space-x-14">
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/">Home</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/about-us">About</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/projects">Projects</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/news-and-updates">News</Link>
            </div>
            <div className="font-semibold max-w-max text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/contact-us">Contact us</Link>
            </div>
          </div>

          <div className="hidden lg:flex">
            <Link href="#" className="px-6 py-4 border-2 border-orange-500 text-orange-500 font-semibold text-lg rounded-xl hover:bg-orange-700 hover:text-white transition ease-linear duration-500">
              Donate
            </Link>
          </div>
        </nav>

        <div className="lg:hidden flex justify-center mt-5">
          <div className="flex flex-col items-center space-y-5">
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/">Home</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/about-us">About</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/projects">Projects</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/news-and-updates">News</Link>
            </div>
            <div className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300">
              <Link href="/contact-us">Contact us</Link>
            </div>
            <div>
              <Link href="#" className="px-6 py-4 border-2 border-orange-500 text-orange-500 font-semibold text-lg rounded-xl hover:bg-orange-700 hover:text-white transition ease-linear duration-500">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
