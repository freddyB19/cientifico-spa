const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const urlAPI = id ? `${API}${id}` : API;

  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Fetch Error" + e);
  }
}

export default getData;
