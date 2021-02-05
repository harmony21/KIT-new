$(document).ready(function() {

    $("#polzunok").slider({
        animate: "slow",
        range: true,    
        min: 80,
        max: 250,
        step: 10,
        values: [ 90, 130 ],
        slide : function(event, ui) {  
            $("#result-min").text(ui.values[0] + " кв.м.");      
            $("#result-max").text(ui.values[1] + " кв.м.");  
        },
        
    });
    $("#result-min").text($("#polzunok").slider("values", 0) + " кв.м.");  
    $("#result-max").text($("#polzunok").slider("values", 1) + " кв.м.");  


     //Развернуть текст в описании 
     $(".btn-more-main").click(function(e){
        var el = $('.btn-more-main').find('span'),
            spanHtml = $('.btn-more-main').find('span').html();
            var elHeight = $('.desc').outerHeight(true);
        if (spanHtml == 'Развернуть текст') {
            $('.desc-wrap').animate({height: elHeight},300);
            el.html('Свернуть текст')
        }
        else {
            $('.desc-wrap').animate({height: "212px"},300);
            el.html('Развернуть текст');
        }
    });


    //Развернуть текст в описании 
    $(".btn-more-desc").click(function(e){
        var el = $('.btn-more-desc').find('span'),
            spanHtml = $('.btn-more-desc').find('span').html();
            var elHeight = $('.desc').outerHeight(true);
        if (spanHtml == 'Развернуть текст') {
            $('.desc-wrap').animate({height: elHeight},300);
            el.html('Свернуть текст')
        }
        else {
            $('.desc-wrap').animate({height: "117px"},300);
            el.html('Развернуть текст');
        }
    });

    //Развернуть текст в описании 
    $(".btn-more-projection").click(function(e){
        var el = $('.btn-more-projection').find('span'),
            spanHtml = $('.btn-more-projection').find('span').html();
            var elHeight = $('.news-more__block.special').find('.desc').outerHeight(true);
        if (spanHtml == 'Развернуть текст') {
            $('.news-more__block.special').find('.desc-wrap').animate({height: elHeight},300);
            el.html('Свернуть текст')
        }
        else {
            $('.news-more__block.special').find('.desc-wrap').animate({height: "117px"},300);
            el.html('Развернуть текст');
        }
    });

    //Развернуть текст в описании 
    $(".btn-more-reason").click(function(e){
        var el = $('.btn-more-reason').find('span'),
            spanHtml = $('.btn-more-reason').find('span').html();
            var elHeight = $('.desc-reason').outerHeight(true);
            console.log(elHeight);
        if (spanHtml == 'Развернуть текст') {
            $('.desc-wrap-reason').animate({height: elHeight},300);
            el.html('Свернуть текст')
        }
        else {
            $('.desc-wrap-reason').animate({height: "117px"},300);
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


    if ($(window).width() <= 480) {
        $('.section.mobile-move').prependTo($('.reasons-wrap'))
    }


    $("hamburger-icon").fancybox();
    $(".sticky-icons__link--call").fancybox({
        autoFocus: false,
        closeExisting: true,
    });
    $(".footer-order-call").fancybox({
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
          height: 650,
          autoHeight: true,
        });

        if ($('.sp-slide.first').hasClass('sp-selected')) {
            $('.form__link--back').css('display', 'none');
        }
        var calculateSlider = $('#calculateSlider').data('sliderPro');
        $('.form__link--back').on('click', function (e) {
            calculateSlider.previousSlide();
            if ($('.sp-slide.first').hasClass('sp-selected')) {
                $('.form__link--back').css('display', 'none');
            }
            if ($('.sp-slide.middle').hasClass('sp-selected')) {
                $('.form__link--forward').css('display', 'flex');
            }
        })
        $('.form__link--forward').on('click', function (e) {
            calculateSlider.nextSlide();
            if ($('.form__link--back').css('display') == 'none') {
                $('.form__link--back').css('display', 'flex');
            }

            if ($('.sp-slide.last').hasClass('sp-selected')) {
                $('.form__link--forward').css('display', 'none');
            }

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
  
          if ($('.sp-slide.first').hasClass('sp-selected')) {
            $('.form__link--back').css('display', 'none');
            }
            var calculateSlider = $('#calculateSlider').data('sliderPro');
            $('.form__link--back').on('click', function (e) {
                calculateSlider.previousSlide();
                if ($('.sp-slide.first').hasClass('sp-selected')) {
                    $('.form__link--back').css('display', 'none');
                }
            })
            $('.form__link--forward').on('click', function (e) {
                calculateSlider.nextSlide();
                if ($('.form__link--back').css('display') == 'none') {
                    $('.form__link--back').css('display', 'flex');
                }

                if ($('.sp-slide.last').hasClass('sp-selected')) {
                    $('.form__links').css('display', 'none');
                }

            }) 
        },
      }); 



      $('.menu__link.calculator').fancybox({
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
  
          if ($('.sp-slide.first').hasClass('sp-selected')) {
            $('.form__link--back').css('display', 'none');
            }
            var calculateSlider = $('#calculateSlider').data('sliderPro');
            $('.form__link--back').on('click', function (e) {
                calculateSlider.previousSlide();
                if ($('.sp-slide.first').hasClass('sp-selected')) {
                    $('.form__link--back').css('display', 'none');
                }
            })
            $('.form__link--forward').on('click', function (e) {
                calculateSlider.nextSlide();
                if ($('.form__link--back').css('display') == 'none') {
                    $('.form__link--back').css('display', 'flex');
                }

                if ($('.sp-slide.last').hasClass('sp-selected')) {
                    $('.form__links').css('display', 'none');
                }

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


    var arrowBack = $(".links__item-changable").find('img');
    if ($(window).width() <= 480) {
        arrowBack.attr('src', 'images/arrow-left-white.svg');
        arrowBack.css('width', '10px');
    }


    //изменения картинок в "Уже сделали расчет" (мобильная версия)
    var madeCalculateIcon = $(".calculate-condition__right").find(".form__title").find('img');
    var addFileIcon = $(".calculate-condition__right").find(".form-group").find('img');
    var sendForm = $(".calculate-condition__right").find(".form__bottom").find('img');
    if ($(window).width() <= 768) {
        madeCalculateIcon.attr('src', 'images/list-icon-white.svg');
        addFileIcon.attr('src', 'images/add-file-icon-white.png');
        addFileIcon.css('width', '25px');
        sendForm.attr('src', 'images/arrow-right-blue.svg');
    }



    
    $(".factos__item").click(function(e){
      $(this).find('.factos__wrap').slideToggle();
      $(this).find('span').toggleClass('active');
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


      //видео в модальном окне
    $("a.video__link").fancybox();


     if ($(window).width() <= 480) {
        $('.three-d').html('3D визуализация');
    }
});