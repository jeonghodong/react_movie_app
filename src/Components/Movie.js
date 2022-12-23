import React from "react";
import styles from "./Movie.module.css";

function Movie({ bgImg, coverImg, title, rating, runtime, like_count, trailer, backClick }) {
  return (
    <>
      <span onClick={backClick} className={styles.arrow_icon}>
        <i class="fa-solid fa-arrow-left"></i>
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
