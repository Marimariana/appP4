//iniciador
const initialize = () => {
  
  getTheme()
}


// MOSTRAR MENU MOBILE
$(document).ready(function () {
  $('#menu_on').click(function () { 
    $('body').toggleClass('visible_menu');
  })
});
