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

  // Склик
  $('.j-slider').slick({
    arrows: true,
    dots: true
  });


  // AJAX - отзывы
  

  $('.j-reviews-btn').on('click', function() {
    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: 'count=2',
      success: function(responce) {
        if (!responce.isShowMore) {
          $('.j-reviews-btn').hide();
        } 

        let html = createHtml(responce.reviews);
        printToPage(html);
      },
      error: function() {
        console.log('Упппсс...');
      }
    });
  });


  function createHtml(reviewsArray) {
    let html = '';

    reviewsArray.forEach(function(review) {
      html = html + `<div class="reviews-item">
      <img src="${review.imageUrl}" alt="${review.imageAlt}" class="reviews-ava" />
      <div class="reviews-text">
        <strong class="reviews-name">${review.name}</strong>
        <blockquote class="reviews-quote">
          “${review.quote}”
        </blockquote>
      </div>
    </div>`;
    });

    return html;
  }

  function printToPage(stringHtml) {
    $('.j-reviews-wrap').append(stringHtml);
  }

});