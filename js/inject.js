$(window).scroll(function(e) {

  var scrollSeviye = $(this).scrollTop();
  
  if(scrollSeviye>2400){
    scrollSeviye=2400;
  }
  
  var buyutme=(scrollSeviye/6000)+1;
 
  $('.').css('-webkit-filter', 'blur('+scrollSeviye/120+'px)');
  
});