$(function () {
  $('.questions dd').hide();
  $('.questions dt').click(function () {
    $(this).next(".questions dd").slideToggle(600);
    $(this).toggleClass("expanded_img");
  });
});
