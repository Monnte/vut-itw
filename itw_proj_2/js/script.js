$(document).ready(function () {
  if (window.innerWidth <= 1000) $("#carousel img").removeClass("lightbox");

  let menuHeight = 0;
  // SMOOTH SCROLL TO SECTIONS
  $("#main-panel a").click(function (event) {
    event.preventDefault();

    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - menuHeight,
      },
      1000
    );

    $("html,body").clearQueue();
    //Toggle off mobile menu
    if (window.innerWidth <= 1000) {
      $("#main-panel li")
        .slice(1)
        .toggle("slow", function () {});
    }
  });

  //LIGHTBOX EFFECT
  $(".lightbox").click(function (event) {
    event.preventDefault();
    $("#overlay").css("display", "flex").hide().fadeIn();
    $("#overlay img").attr("src", $(this).attr("src"));
  });

  $("#overlay").click(function (event) {
    $("#overlay").fadeOut();
  });

  //Mobile menu toglle

  $("#menu-toggle").click(function (event) {
    event.preventDefault();
    menuHeight = $("#main-panel").height();
    $("#main-panel li")
      .slice(1)
      .toggle("slow", function () {});
  });
});
