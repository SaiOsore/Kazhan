//about
$('.header__menu-btn').on('click', function() {
  $('.header-nav').slideToggle('fast', function() {
    if ($(this).css('display') === "none") {
      $(this).removeAttr('style');
    }
  });
  $('.header__menu-btn').toggleClass('header__menu-btn--active');
});