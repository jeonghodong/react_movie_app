import styles from "./Movie.module.scss";
import { onErrorImgSmall, onErrorImgBig } from "../Functions/imgError";
import PropTypes from "prop-types";

function Movie({ bgImg, coverImg, title, rating, runtime, like_count, trailer, backClick }) {
  return (
    <div className="styles.movie">
      <span onClick={backClick} className={styles.movie_arrow_icon}>
        <i className="fa-solid fa-arrow-left"></i>
      </span>
      <img src={bgImg} alt="bgImg" onError={onErrorImgBig} className={styles.movie_bgImg} />
      <div className={styles.movie_box}>
        <div className={styles.movie_box_left}>
          <img src={coverImg} onError={onErrorImgSmall} alt="img" />
          <h2>{title}</h2>
          <p>{`⭐ ${rating} | ⏰ ${runtime} Minutes | 👍 ${like_count}`}</p>
        </div>
        <div className={styles.movie_box_right}>
          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  bgImg: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  like_count: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
  backClick: PropTypes.func.isRequired,
};

export default Movie;
