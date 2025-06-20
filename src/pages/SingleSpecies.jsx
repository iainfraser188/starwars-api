import { useLocation } from "react-router-dom";

function SingleSpecies(){
    const location = useLocation();
    const species = location.state?.singleSpecies;

    if (!species) {
        return (
            <div>
                <p> No Species data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{species.name}</h1>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation} </p>
            <p>Average Lifespan: {species.average_lifespan} Years</p>
            <p>Language: {species.language}</p>
        </div>
    );
}

export default SingleSpecies;