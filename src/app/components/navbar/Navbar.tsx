import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'; // Импорт CSS модуля

const VerticalNavbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Логотип или название */}
        <Link href="/">
          <a>Mohammad</a>
        </Link>
      </div>
      <ul className={styles.navItems}>
        {/* Ссылки навигации */}
        <li className={styles.navItem}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a>ABOUT ME</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
            <a>PROJECTS</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a>CONTACT ME</a>
          </Link>
        </li>
      </ul>
      <div className={styles.contact}>
        <Link href="/contact">
          <a className={styles.contactButton}>Contact me</a>
        </Link>
      </div>
    </nav>
  );
};

export default VerticalNavbar;