var
  $doc = $(document),
  $win = $(window);

function kitty() {
  $('.kitty').removeClass('gohome-')
    .animate({
      right: "-40",
      bottom: "-70"
    }, 2000)
    .on('mouseover', function() {
      var $this = $(this);
      $this.addClass('gohome-');
      setTimeout(function() {
        $this.removeClass('gohome-');
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

  $('.js-job-mail').replaceWith('<a href="ma' + 'ilt' + 'o:job@rai' + 'lsc.' + 'ru">jo' + 'b@r' + 'ail' + 'sc.ru</a>');

  kitty();
  setInterval(function() { kitty(); }, 20000 );

});