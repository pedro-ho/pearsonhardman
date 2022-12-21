//SELECAO DE ELEMENTOS
const menuBtn = document.querySelector("#menu")
const closeMenuBtn = document.querySelector("#close-menu")
const menu = document.querySelector("#mobile-navbar")

// const desktopLinks = document.querySelectorAll("#navbar a")
// const mobileLinks = document.querySelectorAll("#mobile-navbar a")
// const allLinks = [...desktopLinks, ...mobileLinks]

const links = document.querySelectorAll("a[href^='#']")

const slides = document.querySelectorAll(".banner")
const dots = document.querySelectorAll(".dot")
let slideIndex = 0


//FUNCOES
function smoothScroll(e){
    e.preventDefault()

    const href = this.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop
    
    scroll({
        top: offsetTop,
        behavior: "smooth",
    })

    setTimeout(function(){
        if (menu.classList.contains("menu-active")){
            menu.classList.remove("menu-active")
        }
    }, 500)
}

function showSlides(){
    for (let i = 0; i < slides.length; i++){
    slides[i].classList.remove("active")
    dots[i].classList.remove("active")
    }

    slideIndex++

    if(slideIndex > slides.length){
        slideIndex = 1
    }

    slides[slideIndex - 1].classList.add("active")
    dots[slideIndex - 1].classList.add("active")

    setTimeout(showSlides, 3000)
}

//EVENTOS
menuBtn.addEventListener("click", function(){
    menu.classList.add("menu-active")
})

closeMenuBtn.addEventListener("click", function(){
    menu.classList.remove("menu-active")
})

links.forEach((item) => {
    item.addEventListener("click", smoothScroll)
  })

/* INICIALIZACAO */
showSlides()