import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <>
        <div className='navbar'>
            <h1 className='navbar-header' >Star Wars Api</h1>
            <nav className='navbar-items' >
                <Link to="/">Home</Link>
                <Link to="/Films" >Films</Link>
                <Link to="/People" >People</Link>
                <Link to="/Planets" >Planets</Link>
                <Link to="/Species" >Species</Link>
                <Link to="/Starships" >Starships</Link>
                <Link to="/Vehicles" >Vehicles</Link>
            </nav>
        </div>
            
        </>       
    );
}

export default Navbar;