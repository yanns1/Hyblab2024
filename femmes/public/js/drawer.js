"use strict";

function mkDrawer(drawerSelector) {
  const drawer = document.querySelector(drawerSelector);
  const button = document.querySelector(`${drawerSelector} .drawer-button`);
  const overlaySelector = "#overlay";
  const overlay = document.querySelector(overlaySelector);

  // Reset attributes
  drawer.setAttribute("style", "right: -90vw;");

  button.addEventListener("click", function (event) {
    let t1 = anime.timeline({
      easing: "easeInOutQuad",
    });
    let t2 = anime.timeline({
      easing: "easeInOutQuad",
    });

    t1.add({
      targets: drawerSelector,
      right: "0vw",
    });
    t2.add({
      targets: overlaySelector,
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
      targets: drawerSelector,
      right: "-90vw",
      easing: "easeInOutQuad",
    });
    t2.add({
      targets: overlaySelector,
      opacity: 0,
      zIndex: -1,
    });
  });
}
