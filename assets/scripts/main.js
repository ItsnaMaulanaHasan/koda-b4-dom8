define(["jquery", "api", "createContainer"], function ($, getData, createContainerCharacter) {
  $(() => {
    const url = "https://rickandmortyapi.com/api/character";

    const main = async () => {
      const data = await getData(url);
      const dataCharacters = data.data.results;

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
  });
});
