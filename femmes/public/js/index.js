"use strict";

const slideColor = [
  "var(--blue)",
  "var(--orange)",
  "var(--pink)",
  "var(--yellow)",
  "var(--red)",
  "var(--purple)",
  "var(--green)",
  "var(--green)",
  "var(--orange)",
];

function setPaginationBulletActiveColor(activeSlide) {
  const root = document.documentElement;
  root.style.setProperty("--swiper-pagination-color", slideColor[activeSlide]);
}

function setPaginationBulletActiveSize(
  prevPaginationBulletActive,
  paginationBulletActive,
) {
  // Change back the size of previous active slide: make it smaller
  prevPaginationBulletActive.setAttribute(
    "style",
    "height: var(--swiper-pagination-bullet-size); width: var(--swiper-pagination-bullet-size);",
  );

  // Change size of active slide: make it bigger
  paginationBulletActive.setAttribute("style", "height: 12px; width: 12px;");
}

window.onload = function () {
  const mainSwiper = new Swiper(".main-swiper", {
    direction: "vertical",
    keyboard: true,
    mousewheel: {
      releaseOnEdges: true,
      thresholdDelta: 5,
      thresholdTime: 250,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let scrollSwiperDivs = document.querySelectorAll(".scroll-swiper");
  let scrollSwipers = [];
  for (let i = 0; i < scrollSwiperDivs.length; i++) {
    scrollSwipers.push(
      new Swiper(scrollSwiperDivs[i], {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        nested: true,
        cssMode: true,
      }),
    );
  }

  let paginationBulletActive = document.querySelector(
    ".swiper-pagination-bullet-active",
  );
  let prevPaginationBulletActive = paginationBulletActive;
  setPaginationBulletActiveColor(mainSwiper.activeIndex);
  setPaginationBulletActiveSize(
    prevPaginationBulletActive,
    paginationBulletActive,
  );

  mainSwiper.on("slideChange", function () {
    prevPaginationBulletActive = paginationBulletActive;
    paginationBulletActive = document.querySelector(
      ".swiper-pagination-bullet-active",
    );
    setPaginationBulletActiveColor(mainSwiper.activeIndex);
    setPaginationBulletActiveSize(
      prevPaginationBulletActive,
      paginationBulletActive,
    );

    switch (mainSwiper.activeIndex) {
      case 0:
        initSlide1();
        break;
      case 1:
        initSlide2();
        break;
      case 2:
        initSlide3();
        break;
      case 3:
        initSlide4();
        break;
      case 4:
        initSlide5();
        break;
      case 5:
        initSlide6();
        break;
      case 6:
        initSlide7();
        break;
      case 7:
        initSlide8();
        break;
      case 8:
        initSlide9();
        break;
      case 9:
        initSlide10();
        break;
      case 10:
        initSlide11();
        break;
    }
  });

  mainSwiper.on("slideChangeTransitionEnd", () => {
    const activeSlide = mainSwiper.slides[mainSwiper.activeIndex];

    if (activeSlide.querySelector(".scroll-swiper")) {
      mainSwiper.mousewheel.disable();
    }
  });

  // scrollSwiper.on("snapIndexChange", () => {
  //   console.log("Scroll Snap Index changed.");
  // });

  for (let i = 0; i < scrollSwipers.length; i++) {
    scrollSwipers[i].on("toEdge", () => {
      mainSwiper.mousewheel.enable();
    });
  }

  // Init first slide
  initSlide1();

  // fade out the loader "slide"
  // and send it to the back (z-index = -1)
  anime({
    targets: "#loader",
    opacity: 0,
    zIndex: -1,
    easing: "easeOutQuad",
  });
};
