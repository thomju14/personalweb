$(document).ready(function () {
    $(window).scroll(function () {
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll').addClass("show");
        } else {
            $('.scroll').removeClass("show");
        }
    });

    $('.scroll').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");

    });

    $('.bar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");

    });


    $('.menu-bar').click(function () {
        $('.bar .menu').toggleClass("active");
        $('.menu i').toggleClass("active");

    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java Script", "HTML", "CSS", "Twig", "C++", "Web design", "React", "TypeScript"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java Script", "HTML", "CSS", "Twig", "C++", "Web design", "React", "TypeScript"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

