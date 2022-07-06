$(document).ready(function(){
    $('.destination-slider__slide').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        easing: 'ease-in-out',
        infinite: true,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        swipe: true,
        touchMove: true,
        centerMode: true,
        variableWidth:  true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        touchThreshold:20000,
        responsive: [
            {
                breakpoint:395,
                settings: {
                    initialSlide: 0,
                    
                }
            }
        ]
    })
    })
   
