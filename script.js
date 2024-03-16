  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds (adjust as needed)
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    loop: true, // Enable continuous loop
  });
  window.addEventListener("scroll", function () {
    updateHeaderBackground();
  });

  function updateHeaderBackground() {
    var header = document.querySelector("header");
    var navLinks = document.querySelectorAll("nav a");
    var sliderHeight = document.querySelector(".swiper-container")
      .offsetHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= sliderHeight * 0.05) {
      header.style.backgroundColor = "white";
      header.style.color = "crimson";
      navLinks.forEach(function (link) {
        link.style.color = "crimson";
      });
      document.querySelector(".logo a").style.color = "darkblue";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.color = "white";
      navLinks.forEach(function (link) {
        link.style.color = "#fff";
      });
      document.querySelector(".logo a").style.color = "white";
    }
  }
