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




$(".radio-btn").click(function(){
  $(this).toggleid("btn-a");

}); 


});



