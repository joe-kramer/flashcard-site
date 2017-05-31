$(document).ready(function() {
  $(".card").click(function() {
    $(this).find(".front").toggleClass("hidden");
    $(this).find(".back").toggleClass("hidden");
  });
});
