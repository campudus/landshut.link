// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


$(document).foundation();
$('body').flowtype({
  minimum : 500,
  maximum : 1200,
  minFont : 12,
  maxFont : 40,
  fontRatio : 30
});

$(document).ready(function () {
  $('.gallery').magnificPopup({
    items : [
      {
        src : "img/gallery/linkwork-landshut1.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut2.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut3.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut4.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut5.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut6.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut7.jpg"
      },
      {
        src : "img/gallery/linkwork-landshut8.jpg"
      }
    ],
    gallery : {
      enabled : true
    },
    type : 'image'
  });
});
