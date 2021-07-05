// import { MoviesGrid } from "./Components/MoviesGrid";
import s from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails";
import { LandingPage } from "./Pages/LandingPage";
export function App() {
  return (
    <Router>
      <header>
        <Link to= "/">
        <h1 className = {s.title}>Movies</h1>
        </Link> 
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
