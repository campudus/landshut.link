// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

function getElementHeight(elem) {
  return $(elem).height();
}

var $footHeight = getElementHeight(".site-footer");
var $navHeight = getElementHeight(".top-bar");
var $browserHeight = getElementHeight(window);

function getTilesHeight() {
  var $tilesHeight = ($browserHeight - ($footHeight + $navHeight)) / 2;
  return $tilesHeight;
}

function getContentTilesHeight() {
  var $tilesHeight = ($browserHeight - ($footHeight + $navHeight));
  return $tilesHeight;
}

var $contentTilesHeight = getContentTilesHeight();
var $tilesHeight = getTilesHeight();

console.log($tilesHeight);

$(".post").css({
  "height": $tilesHeight
});

$(".tiles-content").css({
  "height": $contentTilesHeight
});