"use strict";

const initSlide7 = function(){
    const drawer = document.querySelector("#slide7 .drawer");

  // Reset attributes
  drawer.setAttribute("style", "right: -90vw; background: #2f2f2f;");

  const button = document.querySelector("#slide7 .drawer-button");
  const overlay = document.querySelector("#slide7 .overlay");
  button.addEventListener("click", function (event) {
    let t1 = anime.timeline({
      easing: "easeInOutQuad",
    });
    let t2 = anime.timeline({
      easing: "easeInOutQuad",
    });

    t1.add({
      targets: "#slide7 .drawer",
      right: "0vw",
      backgroundColor: "#ffffff",
    });
    t2.add({
      targets: ".overlay",
      opacity: 1,
      zIndex: 10,
    });
  });

  overlay.addEventListener("click", function (event) {
    let t1 = anime.timeline({
      easing: "easeInOutQuad",
    });
    let t2 = anime.timeline({
      easing: "easeInOutQuad",
    });

    t1.add({
      targets: "#slide7 .drawer",
      right: "-90vw",
      backgroundColor: "#2f2f2f",
      easing: "easeInOutQuad",
    });
    t2.add({
      targets: ".overlay",
      opacity: 0,
      zIndex: -1,
    });
  });
};
