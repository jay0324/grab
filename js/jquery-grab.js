/**
* jQuery Grab
* Author: Jay Hsu
* Date: 2022-03-22
*/

(function ($, document, window) {
    "use strict";
    $.fn.grab = function (options) {
        const defaults = {
            option: 'optionVal'
        };
        options = $.extend(defaults, options);
        const optionKey = options.optionKey;
        const myDom = $(this);
        let desktopMouseDownMove = false;
        let previousPressPOSX,previousPressPOSY;

        //your code here
        myDom
        .addClass('grab')
        .on('mousedown', function(e){
            e.preventDefault();
            desktopMouseDownMove = true;
            previousPressPOSX = e.pageX;
            previousPressPOSY = (e.pageY-window.pageYOffset-50);
            $(this).addClass('movehand');
        })
        .on('mousemove', function(e){
            if (desktopMouseDownMove){
                let movePOSX = previousPressPOSX - e.pageX;
                let movePOSY = previousPressPOSY - (e.pageY-window.pageYOffset);
                console.log('x:'+movePOSX+' / y:'+movePOSY);
                previousPressPOSX = e.pageX;
                previousPressPOSY = (e.pageY-window.pageYOffset);
                $(this).scrollLeft($(this).scrollLeft()+movePOSX);
                $(this).scrollTop($(this).scrollTop()+movePOSY);
            }
        })
        .on('mouseup mouseleave', function(e){
            desktopMouseDownMove = false;
            $(this).removeClass('movehand');
        });

    }
}(jQuery, document, window));