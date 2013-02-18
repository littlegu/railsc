var
  $doc = $(document),
  $win = $(window);

$doc.ready(function() {

  /* Раскрывающиеся вакансии */
  $('.js-v-head').click(function() {
    $(this).next('.js-v-info').toggleClass('db-');
  });

});