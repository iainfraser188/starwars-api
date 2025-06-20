import { useLocation } from "react-router-dom";

function SingleFilm(){
    const location = useLocation();
    const movie = location.state?.movie;

    if (!movie) {
        return (
            <div>
                <p> No film data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Episode: {movie.episode_id}</p>
            <p>Director: {movie.director}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Opening Crawl</p>
            <p>{movie.opening_crawl}</p>

        </div>
    );
}

export default SingleFilm;