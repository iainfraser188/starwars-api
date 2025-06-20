import { useLocation } from "react-router-dom";

function SinglePerson(){
    const location = useLocation();
    const person = location.state?.person;

    if (!person) {
        return (
            <div>
                <p> No film data found</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Birth Year: {person.birth_year}</p>
            <p>Height: {person.height} cm</p>
            <p>Weight: {person.mass} kg</p>

        </div>
    );
}

export default SinglePerson;