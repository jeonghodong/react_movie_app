import React, { useLayoutEffect, useRef } from "react";
import styles from "./Movies-Lists.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import fadeIn from "../Functions/fadeIn";

function Movies({ id, coverImg, title, year, rating, runtime, genres }) {
  const bg = useRef();
  useLayoutEffect(() => {
    fadeIn(bg);
  }, []);
  return (
    <div ref={bg} className={styles.movies}>
      <div>
        <img src={coverImg} alt="coverimage" className={styles.movies_img} />
      </div>
      <div>
        <h2 className={styles.movies_title}>
          <Link to={`/Detail/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movies_year}>{year}</p>
        <p>{`⭐ ${rating} | ⏰ ${runtime} Minutes`}</p>
        <ul className={styles.movies_genres}>
          {genres.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
