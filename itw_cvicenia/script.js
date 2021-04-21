window.onscroll = function () {
  stickyNavBar();
};

if (window.innerWidth > 576 && window.innerWidth < 992) {
  $("#nav li a")
    .slice(1)
    .contents()
    .filter(function () {
      return this.nodeType === 3;
    })
    .remove();

  $("#nav li span").removeClass("hidden");
}

var nav = document.getElementById("nav");
var navOffset = nav.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= navOffset) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

function scrollToAnchor(anchor) {
  $("html,body").stop();
  $("html,body").animate({ scrollTop: $(anchor).offset().top }, 1000);
}

$("a").click(function (event) {
  var href = $(this).attr("href");
  if (/^#/.test(href)) {
    event.preventDefault();
    scrollToAnchor(href);
  }
});

var navToggle = true;
$(".fa-bars").click(function () {
  $("#nav li")
    .slice(1)
    .toggle("slow", function () {});
});
