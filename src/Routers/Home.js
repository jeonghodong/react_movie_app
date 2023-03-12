import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Movies from "../Components/Movies";
import Slider from "../Components/Slider";
import styles from "./Home-List.module.scss";
import interstellarImage from "../asset/인터스텔라.jpeg";
import gravityImage from "../asset/그래비티.jpeg";
import happyImage from "../asset/행복을찾아서.png";
import avatarImage from "../asset/아바타2.jpeg";
import hunImage from "../asset/100.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  const slides = [
    {
      id: 1,
      imageUrl: interstellarImage,
      title: "Slide 1"
    },
    {
      id: 2,
      imageUrl: gravityImage,
      title: "Slide 2"
    },
    {
      id: 3,
      imageUrl: happyImage,
      title: "Slide 3"
    },
    {
      id: 4,
      imageUrl: avatarImage,
      title: "Slide 4"
    },
    {
      id: 5,
      imageUrl: hunImage,
      title: "Slide 4"
    },
  ];
  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Slider slides={slides} />
          <div className={styles.movies}>
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
        </>
      )}
    </div>
  );
}

export default Home;
