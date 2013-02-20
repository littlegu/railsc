var
  $doc = $(document),
  $win = $(window);

$doc.ready(function() {

  /* Раскрывающиеся вакансии */
  $('.js-v-head').click(function() {
    $(this).closest(".vacancy").toggleClass('show-');
  });

  $('.js-job-mail').replaceWith('<a href="ma' + 'ilt' + 'o:job@rai' + 'lsc.' + 'ru">jo' + 'b@r' + 'ail' + 'sc.ru</a>');

});