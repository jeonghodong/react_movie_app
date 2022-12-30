import React from "react";
import styles from "./Footer.module.scss";
import { footer, social } from "../Data/footer_list";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>{footer.logoName}</h2>
      <ul>
        {social.map((social) => (
          <li key={social.id}>
            <a href={social.href} target={social.target} rel={social.rel}>
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.footer_bottomName}>
        <span>{footer.bottomName}</span>
      </div>
    </footer>
  );
}

export default Footer;
