import { MoviesGrid } from "../Components/MoviesGrid";
import { SearchBar } from "../Components/SearchBar";

export function LandingPage() {
    return (
        <div>
            <SearchBar />
            <MoviesGrid />
        </div>
    )
}
