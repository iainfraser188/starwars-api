import { useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { VehicleCard } from "../components/Cards";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllVehicles()
        .then(data => {
            setVehicles(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (vehicle) => {
        navigate("/Vehicle",{state: {vehicle}});
    };


    if (loading) return <p>Loading vehicles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Vehicles</h1>
            <div className="card-grid">
                {vehicles.map((vehicle, index) =>(
                    <VehicleCard key={index} vehicle={vehicle} onClick={() => handleCardClick(vehicle)} />
                ))}
            </div>
        </div>
    );
}

export default Vehicles;