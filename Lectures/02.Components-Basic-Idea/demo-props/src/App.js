import './App.css';
import MovieList from './components/MovieList';

function App() {
    const movies = [
        { title: "Men of Steel", year: "2008", cast: ["Henry Cavil", "Russell Crowe"] },
        { title: "Harry Potter", year: "2012", cast: ["Daniel Radcliffe", "Ema Watson"] },
        { title: "Lore of the Rings", year: "2002", cast: ["Orlando Bloom", "Elijah Wood"] },
    ]

    return (
        <div className="App">
            <MovieList movies={movies}/>
        </div>
    );
}

export default App;