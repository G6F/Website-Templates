$(document).ready(function () {
  var links = [
    {
      name: 'Template1',
      link: 'https://youtube.com',
    },

    {
      name: 'Template2',
      link: 'https://google.com',
    },

    {
      name: 'Template3',
      link: 'https://steamcommunity.com',
    },
  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 4000,
    });
});
