/*------- jQuery Plugin --------*/
(function($){
  $.fn.modalF = function(obj){
    var openModal;
    var obj = obj || {};
    var color = obj.color || false;
    var speed = obj.speed || 300;
    this.each( function(){

      $('.m-modal').css('display','none');
      $('.m-body').css('display','none');
      $('.m-close').css({
        "position":"fixed",
        "top":"15px",
        "right":"15px",
        "display":"none",
        "cursor":"pointer"
      });

      $(this).click(function(){
        openModal  = $(this);
        var pos = $(this).offset();
        var x = pos.left;
        var y = pos.top;
        var w = $(this).width();
        var h = $(this).height();
        var r = $(this).css('border-radius');
        var c;
        if (!color) {
          c = $(this).css('background-color');
        }else{
          c = color;
        }

        var modalText = $(this).attr('m-open');
        var modal = $('.m-modal[m-modal="'+modalText+'"]');
        var body = modal.children('.m-body')
        var close = modal.children('.m-close');

        modal.css({
          "background-color":c,
          "width":w+'px',
          "height":h+'px',
          "border-radius":r,
          "display":"block",
          "position":"fixed",
          "top":y+'px',
          "left":x+'px',
          "z-index":'9999999',
          "transition":"none"
        });

        modal.animate({

          width:"150%",
          height:"150vh",
          top:"-60px",
          left:"-110px"

        },speed,function(){

          modal.animate({

            width:"100%",
            height:"100vh",
            top:"0",
            left:"0",
            borderRadius:"0"

          },speed/3,function(){

            body.fadeIn('slow');
            close.fadeIn('slow');

          });

        });

        close.click(function(){
          nPos = openModal.offset();
          close.fadeOut('slow');
          body.fadeOut('slow',function(){
            modal.animate({

              width:"150%",
              height:"150vh",
              top:"-60px",
              left:"-110px",
              borderRadius:r

            },0,function(){

              modal.animate({

                width:w+"px",
                height:h+"px",
                top:nPos.top+"px",
                left:nPos.left+"px",
                borderRadius:r

              },speed,function(){

                modal.hide(0);

              });
            });
          });
        });
      });
    });
  }
})(jQuery)
/****************************/

$(document).ready( function(){
  $(".m-open").modalF();
});

/*-----------------------------*/