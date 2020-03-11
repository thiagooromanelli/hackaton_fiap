$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
}
)

var clubs = [
{
  "name":"D-Edge",
  "href": "dedge.html",
  "imgsrc":"http://www.ratierink.com.br/saopaulo/wp-content/uploads/sites/7/2017/08/saopaulo_mtrshp_0508-1-1024x682.jpg"
},
{
  "name":"Villa Country",
  "href": "#",
  "imgsrc":"https://abrilvejasp.files.wordpress.com/2016/11/21453_villa-country.jpeg?quality=70&strip=info&w=923"
}];


var cList = $('#mylist')
$.each(clubs, function(i)
{
    var aaa = $('<div/>')
        .addClass('card')
        .css({"padding": "5px", "margin-bottom":"10px"})
        .appendTo(cList);
    var container = $('<div/>')
        .addClass("container")
        .appendTo(aaa);
    var link = $('<a/>')
        .attr("href",clubs[i].href)
        .appendTo(aaa);
    var img = $('<img/>')
        .attr("src",clubs[i].imgsrc)
        .css({"width": "100%", "height": "200px", "border-radius": "5px"})
        .appendTo(link);
    var h = $('<h5/>')
        .addClass('card-home')
        .text(clubs[i].name)
        .css({"padding": "5px", "margin-top":"5px"})
        .appendTo(aaa);
});

