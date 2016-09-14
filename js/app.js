$ = jQuery.noConflict();

$(document).foundation();

$(document).ready(function() {

  var elemento = $('.orbit');

  var opciones = {
    animInFromLeft: 'fade-in',
    animInFromRight: 'fade-in',
    animOutToLeft: 'fade-out',
    animOutToRight: 'fade-out'
  }


  var slider = new Foundation.Orbit(elemento, opciones);
});
