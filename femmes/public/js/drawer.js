"use strict";

function px2vw(px) {
  return (px / window.innerWidth) * 100;
}

function openDrawer(slideSelector) {
  const drawerSelector = `${slideSelector} .drawer`;
  const overlaySelector = `${slideSelector} .overlay`;
  const chevronSelector = `${slideSelector} .chevron`;
  const chevron = document.querySelector(chevronSelector);

  let t1 = anime.timeline({
    easing: "easeInOutQuad",
  });
  let t2 = anime.timeline({
    easing: "easeInOutQuad",
  });
  let t3 = anime.timeline({
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
  t3.add({
    targets: chevron,
    rotate: -180,
  });
}

function closeDrawer(slideSelector) {
  const drawerSelector = `${slideSelector} .drawer`;
  const overlaySelector = `${slideSelector} .overlay`;
  const chevronSelector = `${slideSelector} .chevron`;
  const chevron = document.querySelector(chevronSelector);

  let t1 = anime.timeline({
    easing: "easeInOutQuad",
  });
  let t2 = anime.timeline({
    easing: "easeInOutQuad",
  });
  let t3 = anime.timeline({
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
  t3.add({
    targets: chevron,
    rotate: 0,
  });
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

  let drawerIsOpen = false;

  button.addEventListener("click", function () {
    switch (drawerIsOpen) {
      case true:
        closeDrawer(slideSelector);
        drawerIsOpen = false;
        break;
      case false:
        openDrawer(slideSelector);
        drawerIsOpen = true;
        break;
    }
  });

  overlay.addEventListener("click", function () {
    closeDrawer(slideSelector);
  });
}
