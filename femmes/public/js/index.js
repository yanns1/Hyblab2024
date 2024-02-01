"use strict";

window.onload = async function () {
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

  mainSwiper.on("slideChange", function () {
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
  await initSlide1();

  // fade out the loader "slide"
  // and send it to the back (z-index = -1)
  anime({
    targets: "#loader",
    opacity: "0",
    "z-index": -1,
    easing: "easeOutQuad",
  });
};
