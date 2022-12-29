import React from "react";
import styles from "./Footer.module.css";
import { footer, social } from "../Data/footer_list";

function Footer() {
  return (
    <footer className={styles.container}>
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
      <div className={styles.footer}>
        <span>{footer.bottomName}</span>
      </div>
    </footer>
  );
}

export default Footer;
