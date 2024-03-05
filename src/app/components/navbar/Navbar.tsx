"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './styles.module.css';

const VerticalNavbar: React.FC = () => {
    const pathname = usePathname() // Использование useRouter для получения текущего пути
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => {
      return pathname === path ? styles.active : '';
  };

    return (
        <>
            <button className={styles.hamburger} onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
                <div  className={styles.logo}>
                    <Link href="/">
                        <a className={isActive('/')}>Mohammad Djabrailov <span>PORTFOLIO</span></a>
                    </Link>
                </div>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={isActive('/')}>HOME</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">
                            <a className={isActive('/about')}>ABOUT ME</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/projects">
                            <a className={isActive('/projects')}>PROJECTS</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            <a className={isActive('/contact')}>CONTACT ME</a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.contact}>
                    <Link href="/contact">
                        <a className={styles.contactButton}>Download CV</a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default VerticalNavbar;