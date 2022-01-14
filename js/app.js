const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const sliderImg = document.querySelector(".slider__img")
const sliderSet = document.querySelector(".slider__set")
const overlay = document.querySelector(".overlay")
let imgId = parseInt(sliderImg.id)

const menu = document.querySelector(".slider__nav-menu")
const menuBtn = document.querySelector(".slider__nav-hamburger")

// let imgs = []

// if (window.innerWidth <= 900) {
//   imgs = [
//     "../images/mobile-image-hero-1.jpg",
//     "../images/mobile-image-hero-2.jpg",
//     "../images/mobile-image-hero-3.jpg"
//   ]
// } else {
//   imgs = [
//     "../images/desktop-image-hero-1.jpg",
//     "../images/desktop-image-hero-2.jpg",
//     "../images/desktop-image-hero-3.jpg"
//   ]
// }

const imgs = {
  mobile: [
    "../images/mobile-image-hero-1.jpg",
    "../images/mobile-image-hero-2.jpg",
    "../images/mobile-image-hero-3.jpg"
  ],
  desktop: [
    "../images/desktop-image-hero-1.jpg",
    "../images/desktop-image-hero-2.jpg",
    "../images/desktop-image-hero-3.jpg"
  ]
}

menuBtn.addEventListener("click", toggleMenu)

prevBtn.addEventListener("click", prevImg)
nextBtn.addEventListener("click", nextImg)

function prevImg() {
  changeImg(imgId, "prev")
}

function nextImg() {
  changeImg(imgId, 'next')
}

function changeImg(id, dir) {
  if (dir == "prev") {
    
    if (id < imgs.mobile.length) {
      id = imgs.mobile.length-1
    } else {
      id--
    }

    sliderImg.id = id
    sliderImg.src = imgs.mobile[id]
    sliderSet.srcset = imgs.desktop[id]
  }

  if (dir == "next") {
    if (id > imgs.mobile.length) {
      id = 0
    } else {
      id++
      
    }
    sliderImg.id = id
    sliderImg.src = imgs.mobile[id]
    sliderSet.srcset = imgs.desktop[id]
  }

  
}

function toggleMenu(e) {
  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "active")
    menuBtn.src = "../images/icon-close.svg"
    menuBtn.style.position = "fixed"
    overlay.classList.replace("off", "on")
  } else {
    menu.classList.replace("active", "hidden")
    menuBtn.src = "../images/icon-hamburger.svg"
    menuBtn.style.position = "relative"
    overlay.classList.replace("on", "off")
  }
}