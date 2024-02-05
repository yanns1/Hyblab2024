"use strict";

function openDrawer(slideSelector) {
  const drawerSelector = `${slideSelector} .drawer`;
  const overlaySelector = `${slideSelector} .overlay`;
  const chevronSelector = `${slideSelector} .chevron`;
  const overlay = document.querySelector(overlaySelector);
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

  overlay.setAttribute("style", "z-index: 10;");
  t1.add({
    targets: drawerSelector,
    left: "0%",
  });
  t2.add({
    targets: overlaySelector,
    opacity: 1,
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
    left: "100%",
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
  drawer.setAttribute("style", "left: 100%;");
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
    drawerIsOpen = false;
  });
}
