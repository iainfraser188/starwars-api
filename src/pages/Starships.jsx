import { useEffect, useState } from "react";
import { fetchAllStarships } from "../services/apiService";

function Starships() {
    const [starShips, setStarShips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllStarships()
        .then(data => {
            console.log("starship data", data);
            setStarShips(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading characters...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>StarShips</h1>
            <ul>
                {starShips.map((ship, index) =>(
                    <li key={index}>{ship.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Starships;