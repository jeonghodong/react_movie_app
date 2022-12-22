import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const list = [
    {
      id: 1,
      name: "High Rating",
      src: "/highrating",
    },
    {
      id: 2,
      name: "Romance",
      src: "/romance",
    },
    {
      id: 3,
      name: "Thriller",
      src: "/thriller",
    },
    {
      id: 4,
      name: "Animation",
      src: "/animation",
    },
  ];

  const social = [
    {
      id: 1,
      href: "https://ko-kr.facebook.com/",
      icon: "fa-brands fa-facebook",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      id: 2,
      href: "https://twitter.com/i/flow/login",
      icon: "fa-brands fa-twitter",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      id: 3,
      href: "https://www.instagram.com/",
      icon: "fa-brands fa-instagram",
      target: "_blank",
      rel: "noreferrer",
    },
  ];
  console.log(social);
  return (
    <header className={styles.container}>
      <h1>
        <Link to="/">Flex</Link>
      </h1>
      <ul>
        {list.map((list) => (
          <li key={list.id}>
            <Link to={list.src}>{list.name}</Link>
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
