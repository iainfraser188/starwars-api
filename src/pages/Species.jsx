import { useEffect, useState } from "react";
import { fetchAllSpecies } from "../services/apiService";

function Species() {
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllSpecies()
        .then(data => {
            setSpecies(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading Species...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Species</h1>
            <ul>
                {species.map((alien, index) =>(
                    <li key={index}>{alien.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Species;