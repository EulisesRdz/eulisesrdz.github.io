$(function(){
  var nb = $('#navbtn');
  var n = $('#topnav nav');
  //creamos las variables
  $(window).on('resize', function(){
    
    if($(this).width() < 570 && n.hasClass('keep-nav-closed')) {
    // si el menú de navegación y el botón de navegación son visibles.
	//volver a ocultar el menú de navegación y retire la clase oculta.
      $('#topnav nav').hide().removeAttr('class');
    }
    if(nb.is(':hidden') && n.is(':hidden') && $(window).width() > 569) {
      // si el menú de navegación y el botón de navegación son tanto oculta,
      //ejecuta cambios cuando la resolución de la pantalla es de 569px
      $('#topnav nav').show().addClass('keep-nav-closed');
    }
  }); 
  
  //$('#topnav nav a,#topnav h1 a,#btmnav nav a').on('click', function(e){
    //e.preventDefault(); // detener todos
  //});
  
  $('#navbtn').on('click', function(e){
    e.preventDefault();
    $("#topnav nav").slideToggle(350);
  });
  
});