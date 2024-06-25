import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoAndMission}>
          <div className={styles.logo}>
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
          <p>Making a difference in the lives of those in need through compassion and dedicated support.</p>
          <div className={styles.socialMedia}>
            <Link href="https://web.facebook.com"><i className="fa-brands text-xl fa-facebook"></i></Link>
            <Link href="https://x.com/home">
              <Image src="/image/x-twitter.svg" alt="" width={18} height={18}/>
            </Link>
            <Link href="www.instagram.com"><i className="fa-brands text-xl fa-instagram"></i></Link>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h3>Our Mission</h3>
            <ul>
              <li><Link href="/initiatives">Initiatives</Link></li>
              <li><Link href="/community-impact">Community Impact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/fundraise">Fundraise</Link></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><Link href="/news-and-updates">News</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/our-team">Our Team</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>© 2024 Charity Organization. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

