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
      kitty.body.attr('class', 'kitty');
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

function yaShare() {
  new Ya.share({
    element: 'js-ya-share',
    l10n: 'ru',
    elementStyle: {
      'type': 'icon',
      'quickServices': ['yaru', 'vkontakte', 'facebook', 'twitter', 'linkedin', 'surfingbird', 'gplus']
    }
  });
}

/*
  Вакансии обновляются каждый понедельник :)
  Раз вы это читаете, то, возможно, нам подходите!
  Ждем ваше резюме http://www.railsc.ru/job
*/
function addDate() {
  var
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    currentTime = new Date(),
    currentDay = currentTime.getDay(),
    currentDate = currentTime.getDate(),
    currentMonth = months[currentTime.getMonth()],
    currentYear = currentTime.getFullYear(),
    mondayDate = currentDate,
    mondayMonth = currentMonth,
    mondayYear = currentYear;

  if (currentDay != 1) {
    currentTime.setDate(currentDate - currentDay + 1);
    mondayDate = currentTime.getDate();
    mondayMonth = months[currentTime.getMonth()];
    mondayYear = currentTime.getFullYear();
  }

  $('.js-va').replaceWith('<p class="updated-at">Обновлено ' + mondayDate + ' ' + mondayMonth + ' ' + mondayYear + ' г.</p>');
}

$doc.ready(function() {

  /* Раскрывающиеся вакансии */
  $('.js-v-head').click(function() {
    $(this).closest(".vacancy").toggleClass('show-');
  });
  
  /* Замена спанов мылом */
  $('.js-job-mail').replaceWith('<a href="ma' + 'ilt' + 'o:job@rai' + 'lsc.' + 'ru">jo' + 'b@r' + 'ail' + 'sc.ru</a>');

  yaShare();

  /* Активность котика */
  kittyActivity();
  setInterval(function() { kittyActivity(); }, 20000 );

});