import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <h1>Star Wars Api</h1>
            <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
                <Link to="/">Home</Link>
                <Link to="/Films">Films</Link>
                <Link to="/People">People</Link>
            </nav>
        </>       
    );
}

export default Navbar;