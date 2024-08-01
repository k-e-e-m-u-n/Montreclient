const menu = document.querySelector(".bar"),
navTxt = document.querySelector(".ceo")

function showmenu(params) {
    menu.classList.toggle("res-d-none");
    navTxt.classList.toggle("res-d-none")

    console.log("clicked");
}

menu.addEventListener("click",showmenu)

