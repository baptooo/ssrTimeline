/**
 * smoothWheel plugin for jQuery
 * 
 * Add this plugin into the page and it will do the smooth :)
 * IE7-10, Chrome, Safari (PC), Firefox
 * Automatic TweenMax support if available
 * 
 * @author baptooo (http://github.com/baptooo)
 */

(function($) {
    if(navigator.userAgent.match(/macintosh/i)) {
        return false;
    }
    var attachEvent = 'attachEvent' in window,
        mousewheel = 'onmousewheel' in window || attachEvent,
        wheelEvent = mousewheel ? 'mousewheel' : 'DOMMouseScroll',
        deltaSens = mousewheel ? -1 : attachEvent ? 1 : 1,
        scrollTop = $(window).scrollTop(),
        gapAmount = 120,
        animating = false,
        tm = null;
    
    $.easing.easeOutQuart = function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
    function getGap(e) {
        var detail = e.detail || e.wheelDeltaY || e.wheelDelta;
        return deltaSens * detail / Math.abs(detail) * gapAmount;
    }
    
    $(window).on('scroll', function() {
        if(animating) {
            return false;
        }
        scrollTop = $(window).scrollTop();
    });
    
    $(attachEvent ? 'body' : document).on(wheelEvent, function(e) {
        e.preventDefault();
        var gap = getGap(e.originalEvent);
        
        if(!gap) {
            return false;
        }
        
        scrollTop = Math.max(0, Math.min($(document).height(), scrollTop + gap));
        animating = true;
        
        if(!attachEvent && 'TweenMax' in window) {
            tm && tm.pause();
            tm = TweenMax.to('html,body', 1, {
                scrollTop: scrollTop,
                ease: Quart.easeOut,
                onComplete: function() {
                    animating = false;
                }
            });
            return false;
        }
        
        $('html,body').stop(true).animate({
            scrollTop: scrollTop
        }, 800, 'easeOutQuart', function() {
            animating = false;
        });
        
        return false;
    });
})(jQuery);