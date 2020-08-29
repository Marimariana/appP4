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