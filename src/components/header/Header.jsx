import React from "react";
import styles from "../header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.headerContainer} _infoContiner`}>
        <div className={styles.headerLogo} >
          <img className={styles.logoImg} src="https://yurilex.com/yurilex_white.svg" alt="Logo" />
        </div>
        <div className={styles.headerBurger}>
          <span></span>
        </div>
        <ul className={styles.headerMenu}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/link1">Services</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/link2">Contact us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
