export function FilmCard( {film, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{film.title}</h1>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
        </div>
    )
}

export function PersonCard( { person, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{person.name}</h1>
            <p>Birth Year: {person.birth_year}</p>
        </div>
    )
}

export function PlanetCard( {planet, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{planet.name}</h1>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export function SpeciesCard( {singleSpecies, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{singleSpecies.name}</h1>
            <p>Classification: {singleSpecies.classification}</p>
        </div>
    )
}

export function StarShipCard( {starship, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
        </div>
    )
}

export function VehicleCard( {vehicle, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <h1>{vehicle.name}</h1>
            <p>Model: {vehicle.model}</p>
        </div>
    )
}