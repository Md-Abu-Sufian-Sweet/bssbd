$(function(){
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#sidebar-wrapper").removeClass("mbl-d-none");
      $("#sidebar-wrapper").addClass("mbl-d-block");
  });

  $(window).resize(function(e) {
    if($(window).width()<=768){

      $("#wrapper").removeClass("toggled");
    }else{
      $("#wrapper").addClass("toggled");
    }
  });
});




AOS.init();







$('.sidebar-nav li').on('click', function(){
    $('.sidebar-nav li').removeClass('menu-active');
    $(this).closest('li').addClass('menu-active');
});

//-------------------------------------------------------------//

    