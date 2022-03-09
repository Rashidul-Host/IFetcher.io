// JavaScript For Responsive Menu

const menu_toggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

menu_toggler.addEventListener("click", function(){
    this.classList.toggle("active");
    menu.classList.toggle("active");
})


const close_btn = document.querySelector(".close-btn");

close_btn.addEventListener("click", function(){
    menu_toggler.classList.remove("active");
    menu.classList.remove("active");

})