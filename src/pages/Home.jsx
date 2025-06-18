import React from 'react';

function Home() {
  return (
    <div>
        <h1 className='mainHeader' >Star Wars Api</h1>
        <div className='homePageButtonContainer'>
            <button>People</button>
            <button>Planets</button>
            <button>Species</button>
            <button>Vehicles</button>
            <button>Starships</button>
            <button>Films</button>
        </div>
    </div>
  );
}

export default Home;