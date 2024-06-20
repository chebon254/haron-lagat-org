import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="bg-white py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
            <Link href="/">
              <Image src="/haronlagat logo.png" alt="Logo" width={180} height={60} />
              <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-orange-500 text-orange-500 rounded-md">
                <i className="feather" data-feather="menu"></i>
              </button>
            </Link>
          </div>

          <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14">
            <li className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href="/about-us">About</Link>
            </li>
            <li className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href="/news-and-updates">News</Link>
            </li>
            <li className="font-semibold text-black-600 hover:text-orange-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>

          <div className="lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6">
            <Link href="#" className="px-6 py-4 border-2 border-orange-500 text-orange-500 font-semibold text-lg rounded-xl hover:bg-orange-700 hover:text-white transition ease-linear duration-500">
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
