function mode(){
    var element = document.body;
    element.classList.toggle("mode_gelap");
}

const sidebarMenu = document.querySelector("#sidebar")
const buttonToggler = document.querySelector(".navigasi_toggler")
const buttonCloser = document.querySelector(".sidebar_close")
const elementNavigationMenus = document.querySelector(".navigasi__menu")

const navigationMenus = [];
navigationMenus.map((navigation) => {
    return navigation; 
})

buttonToggler.addEventListener("click", () => {
    sidebarMenu.classList.add("show");
    sidebarMenu.classList.remove("hide");
});

buttonCloser.addEventListener("click", () => {
    sidebarMenu.classList.add("hide");
    sidebarMenu.classList.remove("show");
});