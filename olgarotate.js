//this plugin was created to make possible to create rotate functions for divs
//author: Hugo S. Mendes

(function ( $ ) {
    $.fn.olgaRotate = function(options) {
        var timeout, clicker = $(this);
        var hold = false;
        var lastY = 0, lastX = 0;
        var mousemoving = false;
        
        var settings = $.extend({
            left: clicker.offset().left,
            top: clicker.offset().top,
            updatableposition: false,
            align: 'right'
        }, options );
        
        clicker.attr("data-olgarotate-api-angle", "0");
        var handler = document.createElement('div');
        $(handler).css("position", "absolute");
        $(handler).css("height", "20px");
        $(handler).css("width", "20px");
        switch(settings.align){
            case 'right': 
                    $(handler).offset({top: 0});
                    $(handler).css({'right':'0','left': 'auto'});break;
            case 'left':  
                    $(handler).offset({top: 0});
                    $(handler).css("left", "0");break;
            case 'center': 
                    $(handler).offset({top: (clicker.height()/2)});
                    $(handler).css("left", (clicker.width()/2)+"px");break;
        }
        
        $(handler).addClass("olgarotate-api-rotate-symbol");
        clicker.append(handler);
        $(handler).mousedown(function(){
            if(settings.updatableposition){
                settings.left = clicker.offset().left;
                settings.top = clicker.offset().top;
            }
            mousemoving = false;
            if(!hold){
                hold= true;
                var e = window.event;
                e.stopPropagation();
                e.preventDefault();
                timeout = setInterval(function(){
                    if(mousemoving){
                        var _angle = getAngle(window.mouseX, window.mouseY);
                        if(clicker.attr("data-olgarotate-api-angle") != _angle){
                            clicker.attr("data-olgarotate-api-angle", _angle);
                            addAngleToObject(_angle);
                        }
                    }
                }, 1);
            }
        
            return false;
        });
        
        $(document).mouseup(function(){
            hold = false;
            clearInterval(timeout);
            return false;
        });
        
        $(document).mousemove(function(e) {
            mousemoving = true;
            var event = e || window.event;
            window.mouseX = event.pageX;
            window.mouseY = event.pageY;
        });
        
        function getAngle(posx, posy){
            var dx = posx - (((settings.left * 2) + clicker.width()) / 2);
            var dy = posy - (((settings.top * 2) + clicker.height()) / 2);
            
            var _angle = (Math.atan2(dy, dx) * 180 / Math.PI);
            if(settings.align == 'right')
                _angle += 45;
            else if(settings.align == 'left')
                _angle -= 225;
            else{
                _angle -= 45;
            }
           return _angle;
        }
        
        function addAngleToObject(angleval){
            clicker.css("transform", "rotate("+ angleval + "deg)");
            clicker.css("-webkit-transform", "rotate("+ angleval + "deg)");
            clicker.css("-ms-transform", "rotate("+ angleval + "deg)");
            clicker.css("-o-transform", "rotate("+ angleval + "deg)");
            clicker.css("-moz-transform", "rotate("+ angleval + "deg)");
        }
    }
}( jQuery ));
