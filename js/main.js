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
        }
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
        $('.intro__desc').find('span').html('Более 10 лет мы профессионально занимаемся строительством и накопили богатый опыт в малоэтажном строительстве');
    }


    $("hamburger-icon").fancybox();
    $(".sticky-icons__link--call").fancybox({
        autoFocus: false,
        closeExisting: true,
    });
    $(".sticky-icons__link--calculate").fancybox();


    //прокрутка "подробнее"
    // $(function(){
    //     $(".link-more").click(function(){
    //             var _href = $(this).attr("href");
    //             $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //             return false;
    //     });
    // });


    //расчет высоты блоков в отзывах
    // var mh = 0;
    // $(".reviews__item.text").each(function () {
    //     var h_block = parseInt($(this).outerHeight());
    //     if(h_block > mh) {
    //        mh = h_block;
    //     };
    // });
    // $(".reviews__item").css('height', mh);

    //появление блока "Выбор города"
    // $(".address__choice-link").click(function(e){
    //   $(".address__hidden").fadeIn();
    // });
    // $(".address__close").click(function(e){
    //   $(".address__hidden").fadeOut();
    // });

    //Заказать звонок
    // $('.btn-call-back').fancybox({
    //     autoFocus: false,
    //     closeExisting: true,
    // }); 

    //Оставить отзыв
  //   $('.btn-leave-review').fancybox({
  //     autoFocus: false,
  //     closeExisting: true,
  // });

  // $("a.gallery").fancybox();


    //заказать звонок
    // $('.btn-order-call').fancybox({
    //   autoFocus: false
    // }); 



    //Мобильное меню
    // $('.menu-icon').fancybox({
    //   closeExisting: true,
    // }); 
    //перемещение номера телефона в header
    // if ($(window).width() <= 1025) {
    //     $('.header__bottom').append( $('.header').find('.phone') );
    // }

    //слайдер фото автомобиля в модальном окне
    // $('.btn-order-car').fancybox({
    //   closeExisting: true,
    //   touch: false,
    //   afterShow: function() {
    //     $('#sliderCar').sliderPro({
    //       autoplay: false,
    //     });

    //     var sliderCar = $('#sliderCar').data('sliderPro');
    //     $('.arrow-left-slider-car').on('click', function (e) {
    //       sliderCar.previousSlide();
    //     })
    //     $('.arrow-right-slider-car').on('click', function (e) {
    //       sliderCar.nextSlide();
    //     }) 

    //   },
    // }); 



    //раскрытие пунктов на странице "Вопросы и ответы"
    // $(".questions").find('li').find('a').click(function(e){
    //   e.preventDefault();
    //   $(this).toggleClass('active');
    //   $(this).next('.questions__wrap').slideToggle(500);
    // });

    //видеоотзывы
    // $("a.popupbox-video").fancybox({
    //   allowfullscreen: 'true'
    // });

    
});