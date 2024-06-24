"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import Logo from "../../../public/logo.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logoAndMenu}>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={180} height={60} />
            </Link>
            <button
              onClick={handleNav}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
            <div className={styles.menuItem}>
              <Link href="/">Home</Link>
            </div>
            <div className={styles.menuItem}>
              <Link href="/about-us">About</Link>
            </div>
            <div className={styles.menuItem}>
              <Link href="/projects">Projects</Link>
            </div>
            <div className={styles.menuItem}>
              <Link href="/news-and-updates">News</Link>
            </div>
            <div className={styles.menuItem}>
              <Link href="/contact-us">Contact us</Link>
            </div>
            <div className={styles.donateButton}>
              <Link href="#">Donate</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
