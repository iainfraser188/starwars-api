import { useEffect, useState } from "react";
import { fetchAllSpecies } from "../services/apiService";
import { SpeciesCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";

function Species() {
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllSpecies()
        .then(data => {
            setSpecies(data);
            console.log(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (singleSpecies) => {
        navigate("/SingleSpecies",{state: {singleSpecies}});
    };

    if (loading) return <p>Loading Species...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Species</h1>
            <div className="card-grid">
                {species.map((singleSpecies, index) =>(
                    <SpeciesCard key={index} singleSpecies={singleSpecies} onClick={() => handleCardClick(singleSpecies)} />
                ))}
            </div>
        </div>
    );
}

export default Species;