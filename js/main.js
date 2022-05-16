
$(".menuview").click(function(){
  $(".menu_bar").css("display","block")
});

$(".menu_bar li").click(function(){
  $(".menu_bar").css("display","none")
});

window.onresize = function(){
  if($(window).width()>1200){
    $(".menu_bar").css("display","none")
  }
}


$(function(){
  /*변수지정*/
  var $menu = $('#mainnav li')
  var $content = $('section')

  //메뉴클릭
  $menu.click(function(e){
    e.preventDefault();
    var index = $(this).index() //몇번째 메뉴인지 
    var tt = $content.eq(index).offset().top //화면상단에서 얼마나 떨어졌는지 
    console.log(index)

      //해당위치로 스크롤이동
      $('html,body').animate({scrollTop:tt});
  })

  $(window).scroll(function(){
    $sct = $(this).scrollTop();

    $content.each(function(i){
      var tg = $(this);
      if(tg.offset().top - 20 < $sct){
        $menu.removeClass('on')
        $menu.eq(i).addClass('on')
      }
    })
  })
})




