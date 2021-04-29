function setUpEvents() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle Nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      // burger Animation
      burger.classList.toggle("toggle");
    });
  };

  navSlide();

  //Sroll To Top Button
  const scrollTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 500) {
      scrollTop.style.display = "block";
    } else {
      scrollTop.style.display = "none";
    }
  }

  scrollTop.addEventListener("click", function () {
    // window.scrollTo(0, 0);

    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });

    // JQuery
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
}

window.onload = function () {
  setUpEvents();
};
