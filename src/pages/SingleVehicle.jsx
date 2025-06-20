import { useLocation } from "react-router-dom";

function SingleVehicle(){
    const location = useLocation();
    const vehicle = location.state?.vehicle;

    if (!vehicle) {
        return (
            <div>
                <p> No Species data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{vehicle.name}</h1>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer} </p>
            <p>Cost: {vehicle.cost_in_credits} Credits</p>
            <p>Crew: {vehicle.crew}</p>
            <p>Length: {vehicle.length}</p>
        </div>
    );
}

export default SingleVehicle;