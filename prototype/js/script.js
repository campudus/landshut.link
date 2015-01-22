/**
 * Created by k on 22.01.2015.
 */
jQuery(document).ready(function () {


  function getElementWidth(elem) {
    return $(elem).width();
  }

  /**
   * Returns Tiles Wrapper Width
   * @returns {number}
   */
  function getContentTilesWidth() {

    var $borderWidth = getElementWidth("#left") * 2;
    var $browserWidth = getElementWidth(window);

    var $tileWrapWidth = $browserWidth - $borderWidth;
    return $tileWrapWidth;
  }

  function getElementHeight(elem) {
    return $(elem).height();
  }

  /**
   * Returns Tiles Row Height
   * @returns {number}
   */
  function getContentTilesHeight() {

    var $footHeight = getElementHeight(".site-footer");
    var $navHeight = getElementHeight("nav");
    var $browserHeight = getElementHeight(window);

    var $tilesHeight = (($browserHeight - $navHeight - $footHeight) -1 ) / 2; // -1 for hiding scrollbar
    return $tilesHeight;
  }

  $(".tile-wrap-part").css({
    "height": getContentTilesHeight()
  });

  $(".tile-wrap").css({
    "width": getContentTilesWidth()
  });

});