import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lists from "../Components/Lists";
import Loader from "../Components/Loader";
import styles from "./Home-List.module.scss";

function List() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { detail } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://yts.mx/api/v2/list_movies.json?${detail}&sort_by=year`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, [detail]);

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movies) => (
            <Lists
              id={movies.id}
              key={movies.id}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              year={movies.year}
              rating={movies.rating}
              runtime={movies.runtime}
              genres={movies.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
