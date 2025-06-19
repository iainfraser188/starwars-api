function FilmCard( {film}) {
    return (
        <div className="card">
            <h1>{film.title}</h1>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
        </div>
    )
}

export default FilmCard