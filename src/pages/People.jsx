import { useEffect, useState } from "react";
import { fetchAllPeople } from "../services/apiService";

function People() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllPeople()
        .then(data => {
            console.log("people data", data);
            setPeople(data);
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
            <h1>People</h1>
            <ul>
                {people.map((person, index) =>(
                    <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default People;