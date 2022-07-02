let burger = document.querySelector(".header__burger");
let cross = document.querySelector(".burger-menu__right");



  

burger.addEventListener('click', ()=> {
    hideAll();
    showBurgerMenu();
 })


cross.addEventListener("click", () => {
  showAll();
  hideBurgerMenu();
});

function hideAll() {
    document.querySelector(".header").classList.add("hide");
    document.querySelector(".about").classList.add("hide");
    document.querySelector(".skills").classList.add("hide");
    document.querySelector(".columns ").classList.add("hide");
    document.querySelector(".portfolio ").classList.add("hide");
    document.querySelector(".contacts ").classList.add("hide");
    document.querySelector(".footer ").classList.add("hide");
}

function showAll() {
document.querySelector(".header").classList.remove("hide");
  document.querySelector(".about").classList.remove("hide");
  document.querySelector(".skills").classList.remove("hide");
  document.querySelector(".columns ").classList.remove("hide");
  document.querySelector(".portfolio ").classList.remove("hide");
  document.querySelector(".contacts ").classList.remove("hide");
  document.querySelector(".footer ").classList.remove("hide");
}

function hideBurgerMenu() {
    document.querySelector(".burger-menu").classList.add("hide");
}

function showBurgerMenu() {
  document.querySelector(".burger-menu").classList.remove("hide");
}


let menuLinks = document.querySelectorAll(".nav[data-goto]");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", menuClick);
});

function menuClick(e) {
    showAll();
    hideBurgerMenu();
    const menuLink = e.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + -250;

    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    e.preventDefault();
};

    navs = document.querySelectorAll(".header__link");

    function getScrollPercentage() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      let documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      return (scrollTop / (documentHeight - windowHeight)) * 100;
    }

    document.addEventListener("DOMContentLoaded", function () {
      window.onscroll = () => {
        if (0 <= getScrollPercentage() && 8 >= getScrollPercentage()) {
          navs[0].classList.add("header__link-active");
          navs[1].classList.remove("header__link-active");
          navs[2].classList.remove("header__link-active");
          navs[3].classList.remove("header__link-active");
          navs[4].classList.remove("header__link-active");

        }

        if (8 < getScrollPercentage() && 20 > getScrollPercentage()) {
          navs[0].classList.remove("header__link-active");
          navs[1].classList.add("header__link-active");
          navs[2].classList.remove("header__link-active");
          navs[3].classList.remove("header__link-active");
          navs[4].classList.remove("header__link-active");
        }

        if (20 < getScrollPercentage() && 38 > getScrollPercentage()) {
          navs[0].classList.remove("header__link-active");
          navs[1].classList.remove("header__link-active");
          navs[2].classList.add("header__link-active");
          navs[3].classList.remove("header__link-active");
          navs[4].classList.remove("header__link-active");
        }

        if (38 < getScrollPercentage() && 92 > getScrollPercentage()) {
          navs[0].classList.remove("header__link-active");
          navs[1].classList.remove("header__link-active");
          navs[2].classList.remove("header__link-active");
          navs[3].classList.add("header__link-active");
          navs[4].classList.remove("header__link-active");
        }

        if (92 < getScrollPercentage() && 100 >= getScrollPercentage()) {
          navs[0].classList.remove("header__link-active");
          navs[1].classList.remove("header__link-active");
          navs[2].classList.remove("header__link-active");
          navs[3].classList.remove("header__link-active");
          navs[4].classList.add("header__link-active");
        }
      };;
    });

navs[0].classList.add("header__link-active");


 