import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Asegúrate de importar el archivo CSS

import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Template Name: Impact
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.remove();
        return;
      }, 3000);
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add("sticked");
        if (nextElement) nextElement.classList.add("sticked-header-offset");
      } else {
        selectHeader.classList.remove("sticked");
        if (nextElement) nextElement.classList.remove("sticked-header-offset");
      }
    };
    window.addEventListener("load", headerFixed);
    document.addEventListener("scroll", headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll("#navbar a");

  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  navbarlinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("target") !== "_blank") {
        e.preventDefault();

        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          var offset = targetElement.offsetTop - 75;
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // /**
  //  * Mobile nav toggle
  //  */
  // const mobileNavShow = document.querySelector(".mobile-nav-show");
  // const mobileNavHide = document.querySelector(".mobile-nav-hide");

  // document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
  //   el.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   });
  // });

  // function mobileNavToogle() {
  //   document.querySelector("body").classList.toggle("mobile-nav-active");
  //   mobileNavShow.classList.toggle("d-none");
  //   mobileNavHide.classList.toggle("d-none");
  // }

  // /**
  //  * Hide mobile nav on same-page/hash links
  //  */
  // document.querySelectorAll("#navbar a").forEach((navbarlink) => {
  //   navbarlink.addEventListener("click", () => {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       mobileNavToogle();
  //     }
  //   });
  // });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return false;
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
