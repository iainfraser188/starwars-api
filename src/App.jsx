import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';
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
          <Route path='/People' element={<People />} />
          <Route path='/Planets' element={<Planets />} />
          <Route path='/Species' element={<Species />} />
          <Route path='/Starships' element={<Starships />} />
          <Route path='/Vehicles' element={<Vehicles />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
