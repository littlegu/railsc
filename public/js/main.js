var
  $doc = $(document),
  $win = $(window),
  kitty = {
    body: $('.kitty'),

    poseNum: 0,
    
    dance: function() {
      kitty._move = setInterval(function() { 
        kitty.poseNum ++;
        kitty.changePose(kitty.poseNum);
        if (kitty.poseNum == 8) {
          kitty.poseNum = 0;
        }
      }, 200);  
    },
    
    changePose: function(n) {
      kitty.body.attr('class', 'kitty step-' + n);
    },
    
    stop: function() {
      clearInterval(kitty._move);
    },
    
    _move: null
  };
  
function kittyActivity() {
  $('.kitty').removeClass('meow')
    .animate({
      right: "-10",
      bottom: "-40"
    }, 2000)
    .on('mouseenter', function() {
      kitty.stop();
      kitty.dance();      
    })
    .on('mouseleave', function() {
      kitty.stop();
    })
    .on('click', function() {
      var 
        $this = $(this);
      
      kitty.stop();
      $this.attr('class', 'kitty meow');
            
      setTimeout(function() {
        $this.removeClass('meow');
      }, 600);
      
      setTimeout(function() {
        $this.animate({
          bottom: "-" +  + $this.height()
        }, 1000);
      }, 1300);
    });
}

$doc.ready(function() {

  /* Раскрывающиеся вакансии */
  $('.js-v-head').click(function() {
    $(this).closest(".vacancy").toggleClass('show-');
  });
  
  /* Замена спанов мылом */
  $('.js-job-mail').replaceWith('<a href="ma' + 'ilt' + 'o:job@rai' + 'lsc.' + 'ru">jo' + 'b@r' + 'ail' + 'sc.ru</a>');

  /* Активность котика */
  kittyActivity();
  setInterval(function() { kittyActivity(); }, 20000 );

});