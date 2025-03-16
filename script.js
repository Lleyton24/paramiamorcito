$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  // Ocultar el enlace al cargar la página
  $('.custom-link').hide();  

  $('.valentines-day').click(function(){
    // Animación de desvanecimiento del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      // Hacer visible la carta con una animación ondulante
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Efecto ondulante
        $(this).css('transform', 'scale(' + scale + ')');
      }});

      // Mostrar el enlace después de 1.5 segundos
      setTimeout(function() {
        $('.custom-link').fadeIn(800);
      }, 1500);
    });
  });
});
