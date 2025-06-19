import { useEffect, useState } from "react";
import { fetchAllPlanets } from "../services/apiService";

function Planets() {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllPlanets()
        .then(data => {
            setPlanets(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading Planets...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Planets</h1>
            <ul>
                {planets.map((planet, index) =>(
                    <li key={index}>{planet.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Planets;