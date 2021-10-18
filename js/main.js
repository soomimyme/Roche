$(function(){
  console.log('111')
  $('#gnb .depth1 > li').hover(
    function(){
      $(this).find('.depth2').stop().slideDown(300);
    },
    function(){
      $(this).find('.depth2').stop().slideUp(300);
    }
  );

  // 검색창 열기 버튼
  $('#main-header .search > a').click(function() {
    $('#search-popup').show();
  });

  // 검색창 닫기
  $('#btn-close').click(function() {
    $('#search-popup').hide();
  })
});