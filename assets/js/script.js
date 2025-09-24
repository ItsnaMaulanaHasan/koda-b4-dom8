const url = "https://rickandmortyapi.com/api/character";

const getData = async (url) => {
  try {
    const dataApi = await fetch(url);
    const dataJson = await dataApi.json();
    return dataJson;
  } catch (error) {
    console.log("Gagal mendapatkan data");
    throw error;
  }
};

const createContainerCharacter = (src, name) => {
  const mainContainer = document.getElementById("container");
  const containerCharacter = document.createElement("div");
  const img = document.createElement("img");
  const nameContainer = document.createElement("div");
  containerCharacter.className = "item";
  img.src = src;
  img.alt = "character";
  nameContainer.title = name;
  nameContainer.innerText = name;
  containerCharacter.append(img, nameContainer);
  mainContainer.append(containerCharacter);
};

const main = async () => {
  const data = await getData(url);
  const dataCharacters = data.results;
  console.log(dataCharacters);

  dataCharacters.forEach((character) => {
    createContainerCharacter(character.image, character.name);
    console.log(character);
  });

  const form = document.getElementById("form-search");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mainContainer = document.getElementById("container");
    mainContainer.replaceChildren();
    const searchValue = e.target.search.value.toLowerCase();
    const characterFilter = dataCharacters.filter((o) => o.name.toLowerCase().includes(searchValue));
    characterFilter.forEach((character) => {
      createContainerCharacter(character.image, character.name);
    });
  });
};

main();
