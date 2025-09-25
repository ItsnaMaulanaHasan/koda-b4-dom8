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
  const containerCharacter = document.querySelector(".item");
  const cloneContainerCharacter = containerCharacter.cloneNode(true);
  const img = cloneContainerCharacter.querySelector("img");
  const nameContainer = cloneContainerCharacter.querySelector("div");
  img.src = src;
  img.alt = name;
  nameContainer.title = name;
  nameContainer.innerText = name;
  cloneContainerCharacter.classList.remove("hidden");
  mainContainer.append(cloneContainerCharacter);
};

const main = async () => {
  const data = await getData(url);
  const dataCharacters = data.results;
  console.log(dataCharacters);

  dataCharacters.forEach((character) => {
    createContainerCharacter(character.image, character.name);
  });

  const form = document.getElementById("form-search");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mainContainer = document.getElementById("container");
    const searchValue = e.target.search.value.toLowerCase();
    const characterFilter = dataCharacters.filter((o) => o.name.toLowerCase().includes(searchValue));
    mainContainer.replaceChildren();
    characterFilter.forEach((character) => {
      createContainerCharacter(character.image, character.name);
    });
  });
};

main();
