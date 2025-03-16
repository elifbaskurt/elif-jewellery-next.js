'use client';
import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.menu} ${isScrolled ? styles.scrolled : ''}`}>
      <ol>
        <li className={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/product">Products</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Header; 