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
      return pathname === path ? styles.active : styles.navItem;
  };

    return <>
        <button className={styles.hamburger} onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
            <div  className={styles.logo}>
                <Link href="/">
                    Mohammad Djabrailov<span>PORTFOLIO</span>
                </Link>
            </div>
            <ul className={styles.navItems}>
                <li className={isActive('/')}>
                    <Link href="/" >
                        HOME
                    </Link>
                </li>
                <li className={isActive('/about')}>
                    <Link href="/about" >
                        ABOUT ME
                    </Link>
                </li>
                <li className={isActive('/projects')}>
                    <Link href="/projects">
                        PROJECTS
                    </Link>
                </li>
                <li className={isActive('/contact')}>
                    <Link href="/contact" >
                        CONTACT ME
                    </Link>
                </li>
            </ul>
            <div className={styles.contact}>
                <Link href="/contact" className={styles.contactButton}>
                    Download CV
                </Link>
            </div>
        </nav>
    </>;
};

export default VerticalNavbar;