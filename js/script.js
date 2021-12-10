let itemcart = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
 itemcart.classList.toggle("active");
}

let menumobile = document.querySelector(".navbar");
let overlay = document.getElementById("overlay");
let closemenu = document.querySelector("#mobileclose-btn");
document.querySelector("#hamburger-btn").onclick = () => {
    menumobile.classList.toggle("active")
    overlay.classList.add("overlay")

}

document.querySelector("#mobileclose-btn").onclick = () => {
    menumobile.classList.remove("active");
    overlay.classList.remove("overlay");
}