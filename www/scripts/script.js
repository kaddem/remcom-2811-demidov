$(document).ready(function(){

  // let isClose = true;

  // $('.j-burger').on('click', function(){
  //   if (isClose) {
  //     $('.j-menu').slideDown();
  //     isClose = false;
  //     return;
  //   }

  //   $('.j-menu').slideUp();
  //   isClose = true;
  // });

  $('.j-burger').on('click', function(){
    $('.j-menu').slideToggle();
  });

});
