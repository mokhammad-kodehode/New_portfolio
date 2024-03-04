"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css'; // Импорт CSS модуля

const VerticalNavbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <button className={styles.hamburger} onClick={toggleNavbar}>
        {/* Иконка гамбургер меню */}
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
            {/* Логотип или название */}
            <Link href="/">
            Mohammad Djabrailov
            </Link>
        </div>
        <ul className={styles.navItems}>
            {/* Ссылки навигации */}
            <li className={styles.navItem}>
            <Link href="/">HOME
            </Link>
            </li>
            <li className={styles.navItem}>
            <Link href="/about">
                ABOUT ME
            </Link>
            </li>
            <li className={styles.navItem}>
            <Link href="/projects">
                PROJECTS
            </Link>
            </li>
            <li className={styles.navItem}>
            <Link href="/contact">
                CONTACT ME
            </Link>
            </li>
        </ul>
        <div className={styles.contact}>
            <Link className={styles.contactButton} href="/contact">
            Download CV
            </Link>
        </div>
    </nav>
    </>
  );
};

export default VerticalNavbar;