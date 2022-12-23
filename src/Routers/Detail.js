import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Loader from "../Components/Loader";
import Movie from "../Components/Movie";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
      });
  }, [id]);

  const backClick = () => {
    navigate(-1);
  };

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className={styles.container}>
          <Movie
            backClick={backClick}
            bgImg={movie.background_image}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
            runtime={movie.runtime}
            like_count={movie.like_count}
            trailer={movie.yt_trailer_code}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
