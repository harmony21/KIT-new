$(document).ready(function() {

  var sliderIntro = $("#sliderIntro");
  sliderIntro.lightSlider({
    item: 1,
    speed: 800,
    pause: 6000,
    mode: 'fade',
    loop: true,
    enableDrag: false,
  }); 

  var gallerySlide = $("#gallerySlide");
  gallerySlide.lightSlider({
    item: 5,
    speed: 800,
    pause: 6000,
    controls: false,
    pager: false,
    enableDrag: false,
    responsive : [
      {
          breakpoint:1200,
          settings: {
              item:4,
            }
      },
      {
          breakpoint:1024,
          settings: {
              item:3,
            }
      },
      {
        breakpoint:768,
        settings: {
            item:2,
          }
      },
      {
        breakpoint:480,
        settings: {
            item:1,
          }
      }
    ]
  }); 
  $('.arrow-left-gallery').click(function(){
    gallerySlide.goToPrevSlide(); 
  });
  $('.arrow-right-gallery').click(function(){
    gallerySlide.goToNextSlide(); 
  });


  //слайдер "Похожие новости"
  var similarNews = $("#similar-news");
  similarNews.lightSlider({
    item: 4,
    speed: 800,
    pause: 6000,
    controls: false,
    pager: false,
    enableDrag: false,
    responsive : [
      {
          breakpoint:1200,
          settings: {
              item:3,
            }
      },
      {
        breakpoint:768,
        settings: {
            item:2,
          }
      },
      {
        breakpoint:480,
        settings: {
            item:1,
          }
      }
    ]
  }); 
  $('.arrow-left-news').click(function(){
    similarNews.goToPrevSlide(); 
  });
  $('.arrow-right-news').click(function(){
    similarNews.goToNextSlide(); 
  });

  //Слайдер в подробной галерее
    var gallerySlideMore = $("#gallerySlideMore");
    gallerySlideMore.lightSlider({
      item: 5,
      speed: 800,
      pause: 6000,
      controls: false,
      pager: false,
      enableDrag: false,
      responsive : [
        {
            breakpoint:1366,
            settings: {
                item:4,
              }
        },
        {
          breakpoint:1024,
          settings: {
              item:3,
            }
        },
        {
          breakpoint:768,
          settings: {
              item:2,
            }
        },
        {
          breakpoint:480,
          settings: {
              item:1,
            }
        }
      ]
    }); 
    $('.arrow-left-gallery-more').click(function(){
      gallerySlideMore.goToPrevSlide(); 
    });
    $('.arrow-right-gallery-more').click(function(){
      gallerySlideMore.goToNextSlide(); 
    });



    //Слайдер в мобильной версии "Услуги подробно"
    var variationSlider = $("#variationSlider");
    variationSlider.lightSlider({
      item: 1,
      speed: 800,
      pause: 6000,
      controls: false,
      pager: false,
      enableDrag: false,
      adaptiveHeight: true,
    }); 
    $('.variation__change--left').click(function(){
      variationSlider.goToNextSlide(); 
    });
    $('.variation__change--right').click(function(){
      variationSlider.goToPrevSlide(); 
    });

    //галерея в моб.версии "Услуги подробно"
    $('#imageGallery').sliderPro({
      buttons: false,
      autoplay: false,
  });  

  var imageGallery = $('#imageGallery').data('sliderPro');

  $('.arrow-right-gallery-more-mobile').click(function(){
    imageGallery.nextSlide(); 
  });
  $('.arrow-left-gallery-more-mobile').click(function(){
    imageGallery.previousSlide(); 
  });


   //галерея в моб.версии "Услуги подробно"
   $('#imageGallery1').sliderPro({
    buttons: false,
    autoplay: false,
});  

var imageGallery1 = $('#imageGallery1').data('sliderPro');

$('.arrow-right-gallery-more-mobile').click(function(){
  imageGallery1.nextSlide(); 
});
$('.arrow-left-gallery-more-mobile').click(function(){
  imageGallery1.previousSlide(); 
});


  //галерея в моб.версии "галерея подробно"
  $('#imageGallery2').sliderPro({
    buttons: false,
    autoplay: false,
  });  

  var imageGallery2 = $('#imageGallery2').data('sliderPro');

  $('.arrow-right-gallery-more-mobile').click(function(){
  imageGallery2.nextSlide(); 
  });
  $('.arrow-left-gallery-more-mobile').click(function(){
  imageGallery2.previousSlide(); 
  });



    //Слайдер "почему к нам стоит обратиться"
    var reasonsSlider = $("#reasonsSlider");
    if ($(window).width() <= 1024) {
      reasonsSlider.lightSlider({
        item: 4,
        speed: 800,
        pause: 6000,
        controls: false,
        pager: false,
        responsive : [
          {
              breakpoint:768,
              settings: {
                  item:2,
                }
          },
          {
            breakpoint:480,
            settings: {
                slideMargin:20,
                item:1.3,
              }
          }
        ]
      }); 
    }

    
})

