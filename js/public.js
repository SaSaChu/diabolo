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
    setInterval (function () {
      $that.find ('>a.left').click ();
    }, 6500);
  });

  $('.nc_boxs').each (function () {
    var $that = $(this).attr ('data-i', 1);
    $that.find ('.tab_boxs > a').click (function () {
      $that.attr ('data-i', $(this).index () + 1);
    });
  });
  $('.aa_pic_boxs').each (function () {
    var $that = $(this);
    var $s_pic = $that.find ('.s_pic');
    var $img = $that.find ('.big_pic > img');
    var $aleft = $that.find ('>a.aleft');
    var $aright = $that.find ('>a.aright');

    $s_pic.click (function () {
      var src = $(this).find ('>img').attr ('src');
      $img.attr ('src', src);
      $(this).addClass ('a').siblings ().removeClass ('a');
    }).first ().click ();
    
    $aleft.click (function () {
      var $t = $that.find ('.s_pic.a').prev ();
      if (!$t.length)
        $s_pic.last ().click ();
      else
        $t.click ();
    });
    $aright.click (function () {
      var $t = $that.find ('.s_pic.a').next ();
      if (!$t.length)
        $s_pic.first ().click ();
      else
        $t.click ();
    });
  });

  $('.s_pic_boxs .s_pic, .top_babox').imgLiquid ({ verticalAlign:'center' });

  // $(".n_picbox, .pic_full").imgLiquid ();

  var $blackbg = $('.blackbg');
  $blackbg.find ('.fn_close').click (function () {
    $blackbg.removeClass ('s');
  });
  $blackbg.find ('.fn_ar_l').click (function () {
    if (!$('.nc_s .video_boxs.a').prev ().length)
      $blackbg.removeClass ('s');
    $('.nc_s .video_boxs.a').prev ().click ();
  });
  $blackbg.find ('.fn_ar_r').click (function () {
    if (!$('.nc_s .video_boxs.a').next ().length || $('.nc_s .video_boxs.a').next ().hasClass ('num_box'))
      $blackbg.removeClass ('s');
    $('.nc_s .video_boxs.a').next ().click ();
  });

  $('.nc_s .video_boxs .photo').each (function () {
    var $that = $(this);
    $that.parent ().click (function () {
      $(this).addClass ('a').siblings ().removeClass ('a');
      var src = $that.find ('>img').attr ('src');
      var text = $that.next ().text ();
      $blackbg.find ('.fn_pic img').attr ('src', src);
      $blackbg.find ('span:not(:last-child)').text ($(this).index () + 1 + ' of 12');
      $blackbg.find ('span:last-child').text (text);
      $blackbg.addClass ('s');
      console.error ($(this).index () + 1);
      
    });
  });
  $(window).bind("load resize", function(){
    setTimeout(function() {
    var w = $('.fb_box').width ();
      $('.fb_box').html ('<div class="fb-page" data-href="' + $('.fb_box').data ('href') + '" data-tabs="timeline" data-width="' + w + 'px" data-height="600" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ZeusDesignStudio/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ZeusDesignStudio/">宙思設計</a></blockquote></div>');
      FB.XFBML.parse ();
    }, 100);
  });
});
