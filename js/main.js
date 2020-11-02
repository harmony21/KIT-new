$(document).ready(function() {

    $("#polzunok").slider({
        animate: "slow",
        range: true,    
        min: 80,
        max: 300,
        step: 5,
        values: [ 90, 130 ],
        slide : function(event, ui) {  
            $("#result-min").text(ui.values[0] + " кв.м.");      
            $("#result-max").text(ui.values[1] + " кв.м.");  
        },
        
    });
    $("#result-min").text($("#polzunok").slider("values", 0) + " кв.м.");  
    $("#result-max").text($("#polzunok").slider("values", 1) + " кв.м.");  


    //Развернуть текст в описании 
    $(".btn-more").click(function(e){
        var el = $('.btn-more').find('span'),
            spanHtml = $('.btn-more').find('span').html();
            var elHeight = $('.desc').outerHeight(true);
        if (spanHtml == 'Развернуть текст') {
            $('.desc-wrap').animate({height: elHeight},300);
            el.html('Свернуть текст')
        }
        else {
            $('.desc-wrap').animate({height: "120px"},300);
            el.html('Развернуть текст');
        }
    });


    if ($(window).width() <= 480) {
       $('.header--changable').addClass('header--inside');
    }
    if ($(window).width() > 480) {
        $('.header--changable').removeClass('header--inside');
     }

    if ($(window).width() <= 480) {
        $('.intro__desc').find('span').html('Более 10 лет мы профессионально занимаемся строительством и накопили богатый опыт в малоэтажном строительстве');
    }


    $("hamburger-icon").fancybox();
    $(".sticky-icons__link--call").fancybox({
        autoFocus: false,
        closeExisting: true,
    });


    $('.sticky-icons__link--calculate').fancybox({
      closeExisting: true,
      touch: false,
      afterShow: function() {
        $('#calculateSlider').sliderPro({
          autoplay: false,
          loop: false,
          touchSwipe: false,
          buttons: false,
          height: 500,
        });

        var calculateSlider = $('#calculateSlider').data('sliderPro');
        $('.form__link--back').on('click', function (e) {
            calculateSlider.previousSlide();
        })
        $('.form__link--forward').on('click', function (e) {
            calculateSlider.nextSlide();
        }) 

      },
    }); 


    $('.links--calculate').fancybox({
        closeExisting: true,
        touch: false,
        afterShow: function() {
          $('#calculateSlider').sliderPro({
            autoplay: false,
            loop: false,
            touchSwipe: false,
            buttons: false,
            height: 500,
            autoHeight: true,
          });
  
          var calculateSlider = $('#calculateSlider').data('sliderPro');
          $('.form__link--back').on('click', function (e) {
              calculateSlider.previousSlide();
          })
          $('.form__link--forward').on('click', function (e) {
              calculateSlider.nextSlide();
          }) 
  
        },
      }); 


      $('.menu-show-elements').hover(function() {
        $('.inside-menu').css('display', 'flex');
      })
      $('.inside-menu').mouseleave(function() {
        $('.inside-menu').css('display', 'none');
      })




    var logoIcon = $(".header--inside").find(".logo").find('img');
    if ($(window).width() <= 768) {
        logoIcon.attr('src', 'images/logo-footer.svg');
    }


    
    $(".factos__item").click(function(e){
      $(this).find('.factos__wrap').slideToggle();
      $(this).find('span').toggleClass('active');
      $(this).find('img').toggleClass('active');
    });



    $(".activities__item").click(function(e){
        e.preventDefault();
        $(this).find('.activities__wrap').slideToggle();
        $(this).find('.activities__details').find('a').toggleClass('active');
        $(this).find('img').toggleClass('active');
      });



    $(".custom-radio").click(function(e){
        var closestDiv = $(this).closest('div');
        var siblings = closestDiv.siblings();
        if (!(closestDiv.hasClass('active')))
        {
            closestDiv.addClass('active');
            siblings.removeClass('active');
        }
        else {
            closestDiv.removeClass('active');
        }
      });
    
});