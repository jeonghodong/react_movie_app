import React from "react";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";

function Lists({ id, coverImg, title, year, rating, runtime, genres }) {
  return (
    <div className={styles.movies}>
      <img src={coverImg} alt="coverimage" className={styles.movies_img} />
      <div>
        <h2 className={styles.movies_title}>
          <Link to={`/Detail/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movies_year}>{year}</p>
        <p>{`⭐${rating} | ⏰ ${runtime} Minutes`}</p>
        <ul className={styles.movies_genres}>
          {genres.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
