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
                item:1.2,
              }
          }
        ]
      }); 
    }

    //Слайдер в мобильной версии "Услуги подробно"
    var variationSlider = $("#variationSlider");
    variationSlider.lightSlider({
      item: 1,
      speed: 800,
      pause: 6000,
      controls: false,
      pager: false,
      enableDrag: false,
    }); 
    $('.variation__change--left').click(function(){
      variationSlider.goToNextSlide(); 
    });
    $('.variation__change--right').click(function(){
      variationSlider.goToPrevSlide(); 
    });
    
})

