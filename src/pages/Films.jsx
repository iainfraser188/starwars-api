import { useEffect, useState } from "react";
import { fetchAllFilms } from "../services/apiService";
import FilmCard from "../components/Cards";

function Films() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllFilms()
        .then(data => {
            setFilms(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    if (loading) return <p>Loading Films...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Films</h1>
            <ul>
                {films.map((movie, index) =>(
                    <FilmCard  key={index} film={movie}/>
                ))}
            </ul>
        </div>
    );
}

export default Films;