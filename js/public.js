/**
 * @author      ZEUS Design <service@zeusdesign.com.tw>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.zeusdesign.com.tw
 */
 
$(function () {

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });
  $('.index-banners').each (function () {
    var $that = $(this).attr ('data-i', 1);
    $that.find ('.bg').imgLiquid ({ verticalAlign:'center' });
    var l = $that.find ('>div>*').length;
    $that.find ('>a').click (function () {
      var i = parseInt ($that.attr ('data-i'), 10);
      $that.attr ('data-i', $(this).hasClass ('left') ? (--i <= 0 ? l : i) : (++i > l ? 1 : i));
    });
// left
// right
  });
  $('.nc_boxs').each (function () {
    var $that = $(this).attr ('data-i', 1);
    $that.find ('.tab_boxs > a').click (function () {
      $that.attr ('data-i', $(this).index () + 1);
    });
  });

});