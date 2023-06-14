let hamburger = document.getElementById("menu");
let clear = document.getElementById("close");
let menu = document.getElementById("menus")

hamburger.addEventListener("click", navMenu)

function navMenu(){
  menu.style.visibility = "visible"
  clear.style.display = "block"
  clear.style.marginRight ="10px"
  hamburger.style.display = "none"
}

clear.addEventListener("click", remove)
function remove(){
  menu.style.visibility = "hidden"
  clear.style.display = "none"
  hamburger.style.display = "block"
}