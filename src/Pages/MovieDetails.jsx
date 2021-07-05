import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Components/Spinner";
import { get } from "../Utils/httpClient";
import s from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  

  useEffect(() => {
    setIsLoading(true)
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false)
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner />
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={s.detailsContainer}>
      <img
        className={s.column + " " + s.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={s.column + " " + s.movieDetails}>
        <p className={s.firstItem}>
          <strong> Title:</strong> {movie.title}
        </p>
        <p>
          <strong> Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong> Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
