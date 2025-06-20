import { useLocation } from "react-router-dom";
import { fetchSinglePlanet } from "../services/apiService";
import { useEffect, useState } from "react";

function SinglePerson(){
    const location = useLocation();
    const person = location.state?.person;
    const [homePlanet, sethomePlanet] = useState([]);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchSinglePlanet(person.homeworld)
        .then(data => {
            sethomePlanet(data.name);
            console.log("homeplanet",homePlanet);
        })
        .catch(err =>{
            setError(err.message);
        })
    }, []);

    if (!person) {
        return (
            <div>
                <p> No film data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Home Planet: {homePlanet}</p>
            <p>Birth Year: {person.birth_year}</p>
            <p>Height: {person.height} cm</p>
            <p>Weight: {person.mass} kg</p>

        </div>
    );
}

export default SinglePerson;