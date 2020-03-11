$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
}
)


var bars = [{
  "name":"O'Malley's",
  "href": "omalleys.html",
  "imgsrc":"https://u.tfstatic.com/restaurant_photos/403/251403/169/612/o-malley-s-irish-pub-restaurant-restaurantzaal-977e7.jpg"
},
{
  "name":"Les 3 Brasseurs",
  "href": "#",
  "imgsrc":"https://www.guiadoturismobrasil.com/up/img/1483643489.jpg"
}];


var cList = $('#mylist')
$.each(bars, function(i)
{
    var aaa = $('<div/>')
        .addClass('card')
        .css({"padding": "5px", "margin-bottom":"10px"})
        .appendTo(cList);
    var container = $('<div/>')
        .addClass("container")
        .appendTo(aaa);
    var link = $('<a/>')
        .attr("href",bars[i].href)
        .appendTo(aaa);
    var img = $('<img/>')
        .attr("src",bars[i].imgsrc)
        .css({"width": "100%", "height": "200px", "border-radius": "5px"})
        .appendTo(link);
    var h = $('<h5/>')
        .addClass('card-home')
        .text(bars[i].name)
        .css({"padding": "5px", "margin-top":"5px"})
        .appendTo(aaa);
});

