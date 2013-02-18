var
  $doc = $(document),
  $win = $(window);

$doc.ready(function() {

  /* Раскрывающиеся вакансии */
  $('.js-v-head').click(function() {
    $(this).closest(".vacancy").toggleClass('show-');
  });

});