$(function(){
    'use strict';
   
    $('#typewriter').typewriter({
        prefix : " ",
        text : ["Designer", "Photographer", "Creative Person"],
        typeDelay : 100,
        waitingTime : 2000,
        blinkSpeed : 50,
    });


    (function($) {
        
        $('.html').rProgressbar({
            percentage: 100,
            fillBackgroundColor: '#1abc9c'
        });
        $('.css').rProgressbar({
            percentage: 80,
            fillBackgroundColor: '#2ecc71'
        });
        $('.php').rProgressbar({
            percentage: 90,
            fillBackgroundColor: '#9b59b6'
        });
        $('.javascript').rProgressbar({
            percentage: 60,
            fillBackgroundColor: '#34495e'
        });
        $('.jquery').rProgressbar({
            percentage: 50,
            fillBackgroundColor: '#f1c40f',
            backgroundColor: '#e67e22'
        });
    })(jQuery);

    (function($) {
        $.fn.rProgressbar = function(options) {
        options = $.extend({ percentage: null, ShowProgressCount: true, duration: 1000, fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '5px', width: '100%' }, options);
        $.options = options;
        return this.each(function(index, el) {
                $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
                    var lineProgressBarInit = function() {
                var progressFill = $(el).find('.proggress');
                var progressBar = $(el).find('.progressbar');
                progressFill.css({ backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius });
                progressBar.css({ width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius });
                progressFill.animate({ width: options.percentage + "%" }, { step: function(x) { if (options.ShowProgressCount) { $(el).find(".percentCount").text(Math.round(x) + "%"); } }, duration: options.duration });
            }
                $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
            });
        }
    })(jQuery);

    window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100,200);
    }




 

});


 