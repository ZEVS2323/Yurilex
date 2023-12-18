// Footer Component
import React from "react";
import styles from "../footer/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Footer Info Container */}
      <div className={`${styles.footerInfoContainer} _infoContiner`}>
        {/* Logo Box */}
        <div className={styles.boxInfoLogo}>
          <div className={styles.logo}>
            <img src="https://yurilex.com/yurilex_white.svg" alt="Logo" />
          </div>
          {/* Description */}
          <p className={styles.description}>
            Empowering Insights, Engineering Tomorrow
          </p>
        </div>

        {/* Contacts Box */}
        <div className={styles.boxInfo}>
          <h2 className={styles.header}>Contacts:</h2>
          <ul className={styles.list}>
            <li className={styles.link}>
              <a href="tel:+380732261553" target="_blank">
                Tel: +380732261553
              </a>
            </li>
            <li className={styles.link}>
              <a href="mailto:info@yurilex.com">E-mail: info@yurilex.com</a>
            </li>
          </ul>
        </div>

        {/* Navigation Box */}
        <div className={styles.boxInfo}>
          <h2 className={styles.header}>Navigation:</h2>
          <ul className={styles.list}>
            <li className={styles.link}>
              <a href="#">Intro</a>
            </li>
            <li className={styles.link}>
              <a href="#">Services</a>
            </li>
            <li className={styles.link}>
              <a href="#">Why us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Top Line */}
      <div className={styles.footerTopLine}>
        {/* Copyright Box */}
        <div className={`${styles.footerCopyright} _infoContiner`}>
          <span className={styles.text}>
            ©2023 by Yurilex All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
