import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllFilms } from "../services/apiService";
import { FilmCard } from "../components/Cards";

function Films() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {
        fetchAllFilms()
        .then(data => {
            setFilms(data);
            console.log("data",data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false);
        })
    }, []);

    const navigate = useNavigate();
    const handleCardClick = (movie) => {
        navigate("/Film",{state: {movie}});
    };

    if (loading) return <p>Loading Films...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Films</h1>
            <div className="card-grid">
                {films.map((movie, index) =>(
                    <FilmCard  key={index} film={movie} onClick={() => handleCardClick(movie)}/>
                ))}
            </div>
        </div>
    );
}

export default Films;