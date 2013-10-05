(function($) {
    $(window).on('resize', function() {
        var h = $(window).height();
        $('.pin').height(h);
        $('.pin .shape').css('top', h / 2);
    }).resize();
    
    var ssrController = $.superscrollorama({
        triggerAtCenter: true,
        playoutAnimations: true
    });
    
    $('.title-anim').ssrTimeline([
        {
            type: 'fromTo',
            options: ['h1', .5, {
                css: { y: 150, opacity: 0 }
            }, {
                css: { y: 0, opacity: 1 },
                ease: Quart.easeOut
            }]
        }
    ], ssrController, {
        offset: 500
    });
    
    $('.bg-paralax').ssrTimeline([
        {
            type: 'fromTo',
            options: ['', .5, {
                css: { backgroundPositionY: 0 }
            }, {
                css: { backgroundPositionY: 1000 }
            }]
        }
    ], ssrController, {
        offset: -600,
        duration: 4000
    });
    
    $('.elts-anim').ssrTimeline([
        {
            type: 'fromTo',
            loopDelay: .2,
            options: ['.elt', .5, {
                css: { y: 150, opacity: 0}
            }, {
                css: { y: 0, opacity: 1},
                ease: Quart.easeOut
            }]
        }
    ], ssrController, {
        offset: -250
    });
    
    $('.pin').ssrTimeline([
        {
            type: 'fromTo',
            options: ['.layer1', .5, {
                css: { height: '100%' }
            }, {
                css: { height: 0 },
                ease: Linear.easeOut
            }]
        }
    ], ssrController, {
        pin: 600
    });
    
})(jQuery);