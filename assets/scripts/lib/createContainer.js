define(["jquery"], function ($) {
  const createContainerCharacter = (src, name) => {
    const cloneContainerCharacter = $(".item").clone(true);
    cloneContainerCharacter.find("img").attr({ src, alt: name });
    cloneContainerCharacter.find("div").attr({ title: name }).text(name);
    cloneContainerCharacter.removeClass("item hidden");
    cloneContainerCharacter.addClass("item-clone");
    $("#container").append(cloneContainerCharacter);
  };

  return createContainerCharacter;
});
