jQuery(function() {
  $('.grid').masonry({
    columnWidth: 370,
    gutter: 30,
    itemSelector: '.grid-item'
  });
  var w = $( window ).width();

  if(w < 420){
    $('.grid-item > img').css('width','100%');
  }

  var hidden = false;
  $('.sub-item').parent().click(function() {
  var subitem = $(this).children('.sub-item');
  if ( $(subitem).is(':hidden') ) {
    $(subitem).slideDown(200);
    hidden = true;
  } else {
    $(subitem).slideUp(200);
    hidden = false;
  }
  });


  $('.navbar ul li > .sub-menu').parent().click(function() {
  var submenu = $(this).children('.sub-menu');
  if ( $(submenu).is(':hidden') ) {
  $(submenu).slideDown(200);
  } else {
    if(hidden != true)
    {
      $(submenu).slideUp(200);
    }
  }
  });

  if(w > 420)
  {
    var offset1 = $('#fixed').offset();
      $(window).scroll(function() {
          if ($(window).scrollTop() > offset1.top) {
              $('#fixed').css('position','fixed');
              $('#fixed').css('top','0');
              $('#fixed').css('z-index','100');
          }
          else {
              $('#fixed').css('position','static');
          }
      });
  } 
    var offset = $('.gallery').offset();
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $('#top').css('display','block');
        }
        else {
            $('#top').css('display','none');
        }
    });

    $('#top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
    });

    var search = false;

    $('.search-icon').click(function(){
      if(search == false)
      {
        $('.sb-search-input').css('display','inline');
        if(w > 992 && w < 1170){
          $('.sb-search-input').animate({
            width : 100,
            height : '100%'
          });
        }
        if(w > 1170)
        {
          $('.sb-search-input').animate({
            width : 200,
            height : '100%'
          });
        }
        search = true;
      }
      else{
        $('.sb-search-input').animate({
          width : 0,
          height: 0,
          padding: 0,
          margin: 0,
          border: 0
        });
        search = false;
      }
    });

});