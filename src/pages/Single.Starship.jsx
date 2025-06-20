import { useLocation } from "react-router-dom";

function SingleStarShip(){
    const location = useLocation();
    const starship = location.state?.starship;

    if (!starship) {
        return (
            <div>
                <p> No Starship data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Cost: {starship.cost_in_credits} Credits</p>
            <p>Length: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
        </div>
    );
}

export default SingleStarShip;