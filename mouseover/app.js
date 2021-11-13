$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext'); //なぜかbox1-extの方は.(ドット)がいらない。
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});