// Carousel Berita Start
var items = document.querySelectorAll("#carousel-item-bottom-homespot");
items.forEach((e) => {
  let slide = 4;

  let next = e.nextElementSibling;
  for (let i = 1; i < slide; i++) {
    if (!next) {
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    e.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

$(document).ready(function () {
  // Kontrol untuk carousel utama
  $("#carousel-control-prev-index-homespot-bottom").click(function (e) {
    e.preventDefault();
    $("#carouselHomespotBottom").carousel("prev");
  });

  $("#carousel-control-next-index-homespot-bottom").click(function (e) {
    e.preventDefault();
    $("#carouselHomespotBottom").carousel("next");
  });

  // Kontrol untuk carousel dalam card
  // Karena setiap carousel dalam card memiliki ID unik, kita loop semua kontrol dan bind secara manual
  $(".carousel-control-prev.carousel-control-prev-icon-homespot-card").each(
    function () {
      var targetCarousel = $(this).data("bs-target");
      $(this).click(function (e) {
        e.preventDefault();
        $(targetCarousel).carousel("prev");
      });
    }
  );

  $(".carousel-control-next.carousel-control-next-icon-homespot-card").each(
    function () {
      var targetCarousel = $(this).data("bs-target");
      $(this).click(function (e) {
        e.preventDefault();
        $(targetCarousel).carousel("next");
      });
    }
  );
});
