import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';
import SingleFilm from './pages/SingleFilm';
import SinglePerson from './pages/SinglePerson';
import SinglePlanet from './pages/SinglePlanet';
import SingleSpecies from './pages/SingleSpecies';
import SingleStarShip from './pages/Single.Starship';
import SingleVehicle from './pages/SingleVehicle';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
        <div className='pageElement'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Films' element={<Films />} />
            <Route path='/Film' element={<SingleFilm/>} />
            <Route path='/People' element={<People />} />
            <Route path='/person' element={<SinglePerson />} />
            <Route path='/Planets' element={<Planets />} />
            <Route path='/Planet' element={<SinglePlanet />} />
            <Route path='/Species' element={<Species />} />
            <Route path='/singleSpecies' element={<SingleSpecies />} />
            <Route path='/Starships' element={<Starships />} />
            <Route path='/Starship' element={<SingleStarShip />} />
            <Route path='/Vehicles' element={<Vehicles />} />
            <Route path='/Vehicle' element={<SingleVehicle />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
