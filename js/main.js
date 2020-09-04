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

$(".btn-mat").click(function(){
  $(this).toggleClass("btn-check");
  $(".radiobtn").toggleClass("radiobtn-b");
});	


$(".btn-cal").click(function(){
  $(this).toggleClass("btn-check");
  $(".radiobtncal").toggleClass("radiobtn-b");
});	

$(".btn-eve").click(function(){
  $(this).toggleClass("btn-check");
  $(".radiobtneve").toggleClass("radiobtn-b");
});	


$(".btn-ob2").on({
     'click': function(){
         $(".change-img2").attr("src","img/img-vistamat-on.svg");
     }
 });

$(".btn-ob1").on({
     'click': function(){
         $(".change-img1").attr("src","img/img-vistacal-on.svg");
     }
 });





$(".btn-ob1").click(function(){
  $(this).toggleClass("btn-obc");
});








$(".btn-ob2").click(function(){
  $(this).toggleClass("btn-obc");
});


