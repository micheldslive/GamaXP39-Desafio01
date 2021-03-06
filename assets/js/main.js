//FILTRAR CATEGORIAS
$(function () {
  setTimeout(function () {
    $(".filters a.active").click();
  }, 1000);
});

$(document).on("click", ".filters a", function () {
  var filterValue = $(this).attr("data-filter");
  $(".filters a").removeClass("active");
  $(this).addClass("active");
  var grid = $("#all").isotope({ filter: filterValue });
  var iso = grid.data("isotope");
  var filterCount = $(".products-count .count");
  filterCount.text(iso.filteredItems.length);
});

// MOSTRAR / OCULTAR MENU STICKY NO SCROLL
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var currentScrollTop = $(this).scrollTop(),
    header = $(".header-nav");

  currentScrollTop >= 250
    ? header.addClass("sticky")
    : header.removeClass("sticky");

  currentScrollTop > lastScrollTop
    ? header.css("top", "-92px")
    : header.css("top", "0");

  lastScrollTop = currentScrollTop;
});

//MUDA A EXIBIÇÃO DE PRODUTOS EM 3 / 4 COLUNAS
$(document).on("click", ".three-p, .four-p", function () {
  if (!$(this).hasClass("selected")) {
    $(".three-p, .four-p").removeClass("selected");
    $(this).addClass("selected");
    $(".product").toggleClass("col-md-4 col-lg-3");
    $(".filters a.active").click();
  }
});

//EXIBIR TEXTO AO CLICAR NO ICON
$(document).on("click", ".header-top .icon", function () {
  $(".header-top .text").removeClass("show");
  $(this).siblings().toggleClass("show");
});

//EFEITO DO MENU HAMBURGER / MOSTRAR NAVEGAÇÃO DO MENU
$(document).on("click", "a.burger", function () {
  $(this).toggleClass("toggle");
  $("#navbarNav").toggleClass("show");
  $("body").toggleClass("overflow");
});
