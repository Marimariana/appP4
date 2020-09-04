$(document).ready(function() {
    // document is loaded and DOM is ready

$(".day-a").click(function(){
  $(this).toggleClass("day-c");
});

$(".day-b").click(function(){
  $(this).toggleClass("day-c");
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



});



