import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Movies from "../Components/Movies";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Header />
          <div className={styles.movies_container}>
            {movies.map((movies) => (
              <Movies
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
        </div>
      )}
    </div>
  );
}

export default Home;
