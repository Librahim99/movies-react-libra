import { useEffect, useState } from "react";
import { useQuery } from "../Hooks/useQuery";
import { get } from "../Utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery(); //
  const search = query.get("search"); //

  useEffect(() => {
    setIsLoading(true);

    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie/"                    //ternario para que la url cambie entre la pagina general y una de busqueda
      get(searchUrl).then((data) => {
          setMovies(data.results);
          setIsLoading(false);
        });
  }, [search]); // vacio = se carga solo la primera vez /

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
