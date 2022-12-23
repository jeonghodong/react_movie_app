import React from "react";
import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

function Movie({ bgImg, coverImg, title, rating, runtime, like_count, trailer }) {
  return (
    <>
      <span className={styles.arrow_icon}>
        <Link to="/">
          <i class="fa-solid fa-arrow-left"></i>
        </Link>
      </span>
      <img src={bgImg} alt="bgImg" className={styles.bgImg} />
      <div className={styles.movie}>
        <div className={styles.left}>
          <img src={coverImg} alt="img" />
          <h2>{title}</h2>
          <p>{`⭐${rating} | ⏰ ${runtime} Minutes | 👍${like_count}`}</p>
        </div>
        <div className={styles.right}>
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Movie;