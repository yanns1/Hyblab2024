"use strict";

function px2vw(px) {
  return (px / window.innerWidth) * 100;
}

function mkDrawer(slideSelector) {
  const drawerSelector = `${slideSelector} .drawer`;
  const overlaySelector = `${slideSelector} .overlay`;
  const drawer = document.querySelector(drawerSelector);
  const button = document.querySelector(`${drawerSelector} .drawer-button`);
  const overlay = document.querySelector(overlaySelector);

  // Reset attributes
  drawer.setAttribute("style", "left: 100vw;");
  overlay.setAttribute("style", "opacity: 0;");

  button.addEventListener("click", function (event) {
    button.setAttribute("style", "cursor: auto;");

    let t1 = anime.timeline({
      easing: "easeInOutQuad",
    });
    let t2 = anime.timeline({
      easing: "easeInOutQuad",
    });

    t1.add({
      targets: drawerSelector,
      left: `${px2vw(30 + 20)}vw`,
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
      left: "100vw",
      easing: "easeInOutQuad",
    });
    t2.add({
      targets: overlaySelector,
      opacity: 0,
      zIndex: -1,
    });

    button.setAttribute("style", "cursor: pointer;");
  });
}
