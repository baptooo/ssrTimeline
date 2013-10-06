(function($) {
    $(window).on('resize', function() {
        var h = $(window).height();
        $('.pin, .pin-letter').height(h);
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
        offset: 150
    });
    
    $('.bg-paralax').ssrTimeline([
        {
            type: 'fromTo',
            options: ['', .5, {
                css: { backgroundPosition: '0 0' }
            }, {
                css: { backgroundPosition: '0 1000px' }
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
                css: { y: -150, opacity: 0, rotation: -15 }
            }, {
                css: { y: 0, opacity: 1, rotation: 0 },
                ease: Quart.easeOut
            }]
        }, {
            type: 'fromTo',
            options: ['h2', .8, {
                css: { x: -250, opacity: 0 }
            }, {
                css: { x: 0, opacity: 1 },
                ease: Quart.easeOut,
                delay: .6
            }]
        }
    ], ssrController);
    
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
    
    $('.pin-letter').ssrTimeline([
        {
            type: 'fromTo',
            loopDelay: .4,
            options: ['.letter', 1, {
                css: { opacity: 1, scale: 0 }
            }, {
                css: { opacity: 0, scale: 40 },
                delay: 1
            }]
        }
    ], ssrController, {
        pin: 4000
    });
    
    $('.documentation').ssrTimeline([
        {
            type: 'fromTo',
            options: ['', .5, {
                css: { backgroundPosition: '0 0' }
            }, {
                css: { backgroundPosition: '0 1000px' }
            }]
        }, {
            type: 'fromTo',
            options: ['h2,p,code', .5, {
                css: { y: 0 }
            }, {
                css: { y : -250 }
            }]
        }
    ], ssrController, {
        offset: -600,
        duration: 4000
    });
    
})(jQuery);