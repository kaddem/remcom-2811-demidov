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

  // Аккордеоны
  let prevBtn;

  $('.j-faq-btn').on('click', function(){
    if (this === prevBtn) {
      $(this).next().slideToggle();
      return;
    }

    $('.j-faq-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = this;
  });


  // Табы в контактах
  $('.j-tab-link').on('click', function(e){
    e.preventDefault();

    let index = $(this).index('.j-tab-link');

    $('.j-tab-link').removeClass('active');
    $(this).addClass('active');

    $('.j-tab-content').removeClass('active');
    $('.j-tab-content').eq(index).addClass('active');
  });

  // Фильтр в "Наших работах"
  $('.j-filter-link').on('click', function(event){
    event.preventDefault();

    $('.j-filter-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');

    if (dataFilter === 'all') {
      $('.j-works-item').show();
      return;
    }

    $('.j-works-item').each(function() {
      let dataType = $(this).data('type');

      if (dataType === dataFilter) {
        $(this).show();
      } else {
        $(this).hide();
      }

    });
  });

});
