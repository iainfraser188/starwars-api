import { useEffect, useState } from "react";
import { fetchAllStarships } from "../services/apiService";
import { StarShipCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";

function Starships() {
    const [starShips, setStarShips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllStarships()
        .then(data => {
            setStarShips(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (starship) => {
        navigate("/StarShip",{state: {starship}});
    };

    if (loading) return <p>Loading starships...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>StarShips</h1>
            <div className="card-grid">
                {starShips.map((starship, index) =>(
                    <StarShipCard key={index} starship={starship} onClick={() => handleCardClick(starship)} />
                ))}
            </div>
        </div>
    );
}

export default Starships;