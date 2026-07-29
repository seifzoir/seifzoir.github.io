// ===========================
// Mobile Navigation
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// ===========================
// Sticky Navbar
// ===========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
