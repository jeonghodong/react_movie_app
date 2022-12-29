import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { list, social } from "../Data/header_list";

function Header() {
  return (
    <header className={styles.container}>
      <h1>
        <Link to="/">F l e x</Link>
      </h1>
      <ul>
        {list.map((list) => (
          <li key={list.id}>
            <Link to={`/${list.path}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {social.map((social) => (
          <li key={social.id}>
            <a href={social.href} target={social.target} rel={social.rel}>
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
