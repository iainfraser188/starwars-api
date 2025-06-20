export async function fetchAllPeople() {
    const response = await fetch('https://swapi.info/api/people');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchAllFilms() {
    const response = await fetch('https://swapi.info/api/films');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchAllPlanets() {
    const response = await fetch('https://swapi.info/api/planets');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchAllSpecies() {
    const response = await fetch('https://swapi.info/api/species');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchAllVehicles() {
    const response = await fetch('https://swapi.info/api/vehicles');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchAllStarships() {
    const response = await fetch('https://swapi.info/api/starships');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}

export async function fetchSinglePlanet(url) {
     const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}