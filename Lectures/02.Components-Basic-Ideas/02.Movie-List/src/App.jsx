import "./App.css";
import MovieList from "./components/MovieList";

function App() {
    const movies = ["The Matrix", "Man of Steel", "Lord of the Rings"];
    return <MovieList movies={movies} title={"My Movie List:"} />;
}

export default App;
