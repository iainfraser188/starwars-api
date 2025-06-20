import { useLocation } from "react-router-dom";

function SinglePlanet(){
    const location = useLocation();
    const planet = location.state?.planet;

    if (!planet) {
        return (
            <div>
                <p> No Planet data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Population: {planet.population}</p>
            <p>Hours per Day: {planet.rotation_period} </p>
            <p>Days per Year: {planet.orbital_period} </p>
            <p>Climate: {planet.climate}</p>

        </div>
    );
}

export default SinglePlanet;