import { useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/apiService";

function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllVehicles()
        .then(data => {
            console.log("vehicle data", data);
            setVehicles(data);
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
            <h1>Vehicles</h1>
            <ul>
                {vehicles.map((vehicle, index) =>(
                    <li key={index}>{vehicle.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Vehicles;