export async function fetchAllCharactors() {
    const response = await fetch('https://swapi.info/api/people');
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
}