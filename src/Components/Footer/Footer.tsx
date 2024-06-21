import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#143754] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <div className="space-y-4">
                <div>
                  <Link href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span>
                        <Image
                          src="/haronlagat logo.png"
                          alt="AI Logo"
                          width="180"
                          height="64"
                          className="w-[180px]"
                          style={{ filter: 'invert(1) brightness(2)' }}
                        />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="max-w-md pr-16 text-md text-gray-200">
                  Making a difference in the lives of those in need through compassion and dedicated support.
                </div>
                <div className="flex space-x-2">
                  <Link href="https://www.linkedin.com" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                  <Link href="https://www.twitter.com" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">Twitter</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">Programs</Link></li>
                  <li><Link href="#" className="hover:underline">Initiatives</Link></li>
                  <li><Link href="#" className="hover:underline">Community Impact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">Volunteer</Link></li>
                  <li><Link href="#" className="hover:underline">Donate</Link></li>
                  <li><Link href="#" className="hover:underline">Fundraise</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">Blog</Link></li>
                  <li><Link href="#" className="hover:underline">News</Link></li>
                  <li><Link href="#" className="hover:underline">Impact Stories</Link></li>
                  <li><Link href="#" className="hover:underline">FAQ</Link></li>
                  <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline">Our Story</Link></li>
                  <li><Link href="#" className="hover:underline">Our Team</Link></li>
                  <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            &copy; 2024 Charity Organization. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
