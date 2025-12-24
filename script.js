const menu = document.getElementById("menu");
const btn = document.querySelector(".fa-bars");

btn.addEventListener("click", ()=> {
    menu.classList.toggle("active")
})