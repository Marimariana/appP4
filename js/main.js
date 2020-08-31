<<<<<<< HEAD
$(document).ready(function(){

	$('.menu').hover(function(){}


}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
=======
//iniciador
const initialize = () => {
    toggleMenu()
    getTheme()
  }

  // MOSTRAR MENU MOBILE
const toggleMenu = () => {
    let menu = document.getElementById('menu')
    menu.classList.toggle('open')
    menu.classList.toggle('closed')
    let hamburger = document.getElementById('hamburger')
    hamburger.classList.toggle('close-icon')
  }


  // AUXILIARES xd
  
  const closeMenu = () => {
    let menu = document.getElementById('menu')
    if (menu.classList.contains('open')) {
      toggleMenu()
    }
  }
>>>>>>> mariMaterias
