// check if browser support HTML5 local storage
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}

function correctHeight() {

    var pageWrapper = $('#page-wrapper');
    var navbarHeight = $('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();

    if (navbarHeight > wrapperHeight) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }

    if (navbarHeight < wrapperHeight) {
        if (navbarHeight < $(window).height()) {
            pageWrapper.css("min-height", $(window).height() + "px");
        } else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }

    if ($('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight) {
            pageWrapper.css("min-height", navbarHeight + "px");
        } else {
            pageWrapper.css("min-height", $(window).height() - 60 + "px");
        }
    }
}

function detectBody() {
    if ($(document).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
}

export {localStorageSupport,animationHover,SmoothlyMenu,WinMove,correctHeight,detectBody}