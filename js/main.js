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



$(".radio-btnb").click(function(){
  $(this).css("background-color", "#10BEF0");
  $(".radiobtn-switchoff").toggleClass("radiobtn-switchonb");
    $(".radio-btna").css("background-color", "transparent");
      $(".radiobtn-switchon").toggleClass("radiobtn-switchoffb");




$(".btn-ob2").click(function(){
  $(this).toggleClass("btn-obc");
});


//Acordeon

$(document).ready(function(){

  $("#acordeon > ul > li ul").each(function(index, element) {
    var count = $(element).find("li").length;
    var content = "" + count + "";
  });
  $("#acordeon ul ul li:odd").addClass("odd");
$("#acordeon ul ul li:even").addClass("even");
$("#acordeon > ul > li > a").click(function() {
  var checkElement = $(this).next();

  $("#acordeon li").removeClass("active");
  $(this).closest("li").addClass("active");

  if (checkElement.is("ul") && checkElement.is(":visible")) {
    $(this).closest("li").removeClass("active");
    checkElement.slideUp("normal");
  }
  if (checkElement.is("ul") && !checkElement.is(":visible")) {
    $("#acordeon ul ul:visible").slideUp("normal");
    checkElement.slideDown("normal");
  }

  if ($(this).closest("li").find("ul").children().length == 0) {
    return true;
  } else {
    return false;
  }
});


});
  });