document.addEventListener('DOMContentLoaded', function () {
    var yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    var siteHeader = document.querySelector('.site-header');
    if (!siteHeader) {
        return;
    }

    var handleScroll = function () {
        if (window.scrollY > 10) {
            siteHeader.classList.add('is-scrolled');
        } else {
            siteHeader.classList.remove('is-scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
});

$(document).ready(function () {
    $('.slick-home-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay : true,
        pauseOnHover:false,
    });

     $('#home-banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
               autoplay : true,
        pauseOnHover:false,
    });

     $('.slick-recipes').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
               autoplay : true,
        pauseOnHover:false,
    });

     $('.slick-4-1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
               autoplay : true,
        pauseOnHover:false,
    });

     $('.slick-3-1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
               autoplay : true,
        pauseOnHover:false,
    });
});