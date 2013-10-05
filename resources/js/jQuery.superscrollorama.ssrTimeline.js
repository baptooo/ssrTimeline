/**
 * ssrTimeline plugin for jQuery.superscrollorama
 * @param anim {Array}, set of animations
 * @param controller {Object}, superScrollorama controller
 * @param pin {Boolean}, animation must be pin instead of addTween
 * @param settings {Object}, additionnal settings for global anim
 * 
 * anim options: {
 *     type: 'TweenMax method (to, from, fromTo)',
 *     options: 'Animation configuration, TweenMax syntax',
 *     loopDelay: 'set a delay to add for set of elements'
 * }
 * 
 * settings {
 *     duration: {Number} addTween parameter for duration offset in pixels,
 *     pin: {Number} allowing pin for animation and value for duration
 * }
 */

(function($) {
    $.fn.ssrTimeline = function(anims, controller, settings) {
        var tl = new TimelineLite(),
            list = [],
            settings = jQuery.extend({
                duration: 0,
                pin: 0
            }, settings);
            
        for(var i in anims) {
            var anim = anims[i],
                opt = anim.options,
                selector = $(opt[0], this).length ? $(opt[0], this) : $(this);
                
            selector.each(function(j) {
                var loopOpt = $.extend([], opt);
                
                if(anim.loopDelay) {
                    loopOpt[loopOpt.length - 1].delay = anim.loopDelay * j;
                }
                loopOpt[0] = this;
                
                list.push(TweenMax[anim.type].apply(this, loopOpt));
            });
        }
        tl.append(list);
        
        // TODO: include pin support
        if(settings.pin) {
            return controller.pin(this, settings.pin, {
                anim: tl
            });
        }
        
        controller.addTween(this, tl, settings.duration, settings.offset);
        
        return $(this);
    };
})( jQuery );