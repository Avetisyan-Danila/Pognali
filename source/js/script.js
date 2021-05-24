const main = document.querySelector(".main");

// Header
const body = document.querySelector(".page-body");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header-nav");
const headerToggle = document.querySelector(".header__toggle");

header.classList.remove("header--nojs");
header.classList.remove("header--active");
headerMenu.classList.remove("header-nav--nojs");
headerMenu.classList.add("header-nav--closed");

const headerLogoImg = document.querySelector(".header__logo-img");
const headerLogoImgMobilePng = document.querySelector(".header__logo-source-mobile-png");
const headerLogoImgMobile = document.querySelector(".header__logo-source-mobile");
const headerLogoImgDesktop = document.querySelector(".header__logo-source-desktop");

headerLogoImg.src = "img/logo.png";
headerLogoImg.srcset = "img/logo@2x.png 2x";
headerLogoImgMobilePng.srcset = "img/logo-big.png 1x, img/logo-big@2x.png 2x";
headerLogoImgMobile.srcset = "img/logo.webp 1x, img/logo@2x.webp 2x";
headerLogoImgDesktop.srcset = "img/logo-big.webp 1x, img/logo-big@2x.webp 2x";

headerToggle.addEventListener("click", () => {
  body.classList.toggle("lock");
  header.classList.toggle("header--active");
  headerToggle.classList.toggle("header__toggle--active");
  headerMenu.classList.toggle("header-nav--closed");

  if (header.classList.contains("header--active") || header.classList.contains("header--scroll")) {
    headerLogoImg.src = "img/logo-extra.png";
    headerLogoImg.srcset = "img/logo-extra@2x.png 2x";
    headerLogoImgMobilePng.srcset = "img/logo-big-extra.png 1x, img/logo-big-extra@2x.png 2x";
    headerLogoImgMobile.srcset = "img/logo-extra.webp 1x, img/logo-extra@2x.webp 2x";
    headerLogoImgDesktop.srcset = "img/logo-big-extra.webp 1x, img/logo-big-extra@2x.webp 2x";
  } else {
    headerLogoImg.src = "img/logo.png";
    headerLogoImg.srcset = "img/logo@2x.png 2x";
    headerLogoImgMobilePng.srcset = "img/logo-big.png 1x, img/logo-big@2x.png 2x";
    headerLogoImgMobile.srcset = "img/logo.webp 1x, img/logo@2x.webp 2x";
    headerLogoImgDesktop.srcset = "img/logo-big.webp 1x, img/logo-big@2x.webp 2x";
  }
});

// Header scroll
window.onscroll = () => {
  if (window.pageYOffset > 0) {
      header.classList.add("header--scroll");
      headerMenu.classList.add("header-nav--scroll")

      headerLogoImg.src = "img/logo-extra.png";
      headerLogoImg.srcset = "img/logo-extra@2x.png 2x";
      headerLogoImgMobilePng.srcset = "img/logo-big-extra.png 1x, img/logo-big-extra@2x.png 2x";
      headerLogoImgMobile.srcset = "img/logo-extra.webp 1x, img/logo-extra@2x.webp 2x";
      headerLogoImgDesktop.srcset = "img/logo-big-extra.webp 1x, img/logo-big-extra@2x.webp 2x";
    } else {
      header.classList.remove("header--scroll");
      headerMenu.classList.remove("header-nav--scroll")

      headerLogoImg.src = "img/logo.png";
      headerLogoImg.srcset = "img/logo@2x.png 2x";
      headerLogoImgMobilePng.srcset = "img/logo-big.png 1x, img/logo-big@2x.png 2x";
      headerLogoImgMobile.srcset = "img/logo.webp 1x, img/logo@2x.webp 2x";
      headerLogoImgDesktop.srcset = "img/logo-big.webp 1x, img/logo-big@2x.webp 2x";
  }
};

// Modal profile
if (main.classList.contains("main-index")) {
  const profileLink = document.querySelector(".profile__link");
  const profileModal = document.querySelector(".modal-profile");
  const profileModalClose = document.querySelector(".modal-profile__button")

  profileLink.addEventListener("click", (e) => {
    e.preventDefault();
    profileModal.classList.add("modal-show");
  });

  profileModalClose.addEventListener("click", () => {
    profileModal.classList.remove("modal-show");
  });
}

if (main.classList.contains("main-form")) {
  // Country choose
  const stepItem = document.querySelector(".step-country__item--choose");
  const countryChoose = document.querySelector(".country-choose");
  const countryChooseButtonOpen = document.querySelector(".step-country__choose");
  const countryChooseButtonClose = document.querySelector(".step-country__close");

  countryChooseButtonOpen.addEventListener("click", () => {
    countryChoose.classList.toggle("country-choose--active")
    countryChooseButtonOpen.classList.toggle("step-country__choose--active")
    stepItem.classList.toggle("step-country__item--active")
    countryChooseButtonClose.classList.toggle("step-country__close--active")
  })

  // Smooth scroll
  const FormAnchors = main.querySelectorAll(".step__anchor[href*='#']")

  for (let anchor of FormAnchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute("href").substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
}

if (main.classList.contains("main-catalog")) {
  // Pick filter
  const pickBlockButtonOpen = document.querySelectorAll(".pick-block__top");
  const pickBlock = document.querySelectorAll(".pick-block");

  for (let i = 0; i < pickBlockButtonOpen.length; i++) {
    pickBlockButtonOpen[i].addEventListener("click", () => {
      pickBlock[i].classList.toggle("pick-block--opened");
    })
  }

  // Catalog filter
  const filterButton = document.querySelector(".filter__button");
  const filterBlock = document.querySelector(".filter-block");
  const filterContinents = document.querySelector(".filter-continents");
  const filterBlockButtonClose = document.querySelector(".filter-block__button");

  filterButton.addEventListener("click", () => {
    filterButton.classList.toggle("filter__button--active");
    filterBlock.classList.toggle("filter-block--active");
    filterContinents.classList.toggle("filter-continents--active");
  })

  filterBlockButtonClose.addEventListener("click", () => {
    filterButton.classList.remove("filter__button--active");
    filterBlock.classList.remove("filter-block--active");
    filterContinents.classList.remove("filter-continents--active");
  })

  // Catalog like button
  const catalogLikeButton = document.querySelectorAll(".catalog-item__like");

  for (let i = 0; i < catalogLikeButton.length; i++) {
    catalogLikeButton[i].addEventListener("click", () => {
      catalogLikeButton[i].classList.toggle("catalog-item__like--active");
    })
  }
}
