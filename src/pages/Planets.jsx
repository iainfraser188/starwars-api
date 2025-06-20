import { useEffect, useState } from "react";
import { fetchAllPlanets } from "../services/apiService";
import { PlanetCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const handleCardClick = (planet) => {
        navigate("/Planet",{state: {planet}});
    };

    if (loading) return <p>Loading Planets...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Planets</h1>
            <div className="card-grid">
                {planets.map((planet, index) =>(
                    <PlanetCard key={index} planet={planet} onClick={() => handleCardClick(planet)}/>
                ))}
            </div>
        </div>
    );
}

export default Planets;