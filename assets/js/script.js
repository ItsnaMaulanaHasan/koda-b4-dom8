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
  const cloneContainerCharacter = $(".item").clone(true);
  cloneContainerCharacter.find("img").attr({ src, alt: name });
  cloneContainerCharacter.find("div").attr({ title: name }).text(name);
  cloneContainerCharacter.removeClass("item hidden");
  cloneContainerCharacter.addClass("item-clone");
  $("#container").append(cloneContainerCharacter);
};

const main = async () => {
  const data = await getData(url);
  const dataCharacters = data.results;

  dataCharacters.forEach((character) => {
    createContainerCharacter(character.image, character.name);
  });

  $("#form-search").on("submit", function (e) {
    e.preventDefault();
    const searchValue = e.target.search.value.toLowerCase();
    const characterFilter = dataCharacters.filter((o) => o.name.toLowerCase().includes(searchValue));
    $(".item-clone").remove();
    characterFilter.forEach((character) => {
      createContainerCharacter(character.image, character.name);
    });
  });
};

main();
