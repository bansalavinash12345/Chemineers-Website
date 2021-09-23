
// For toggle-menu

var navLinks = document.getElementById("navLinks");

function showMenu(){
  navLinks.style.right ="0";
}
function hideMenu(){
  navLinks.style.right ="-200px";

}
//TEAMS start


$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});


//fading in and out of the sticky header
$(window).scroll(function () {
  if ($(this).scrollTop() < 50) {
    $('.garm').fadeIn();
  }
  else {
    $('.garm').fadeOut();
  }

  if ($(this).scrollTop() > 280) {
    $('.naram').addClass('sharm').show(900,
      function () {
        $(this).css('display', 'flex');
      }
    );
  }
  else {
    $('.sharm').hide(1000);
  }


});


//highlighting the links in the sticky header while scrolling
$(window).scroll(function () {
  var position = $(this).scrollTop();

  $('.sections').each(function () {
    var target = $(this).offset().top - 100;
    var id = $(this).attr('id');

    if (position >= target) {
      $('.arm a').removeClass('active');
      $('.arm a[href=\\#' + id + ']').addClass('active');
    }
    $('.garm a[href="#faculty"]').removeClass('active');
  });



});

//hover issue in mobile
//teams end
