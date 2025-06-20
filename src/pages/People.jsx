import { useEffect, useState } from "react";
import { fetchAllPeople } from "../services/apiService";
import { PersonCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";

function People() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllPeople()
        .then(data => {
            setPeople(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (person) => {
        navigate("/Person",{state: {person}});
    };

    if (loading) return <p>Loading characters...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>
            <h1>People</h1>
            <div className="card-grid">
                {people.map((person, index) =>(
                    <PersonCard key={index} person={person} onClick={() => handleCardClick(person)} />
                ))}
            </div>
        </div>
    );
}

export default People;