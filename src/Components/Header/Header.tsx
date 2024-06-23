"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logoAndMenu}>
            <Link href="/">
              <Image src="/haronlagat logo.png" alt="Logo" width={180} height={60} />
            </Link>
            <button className={styles.menuButton} onClick={toggleMenu}>
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
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
