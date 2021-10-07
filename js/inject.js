$(window).scroll(function(e) {

  var scrollSeviye = $(this).scrollTop();
  
  if(scrollSeviye>600){
    scrollSeviye=600;
  }
  
  var buyutme=(scrollSeviye/600)+1;
 
  $('#blur').css('backdrop-filter', 'blur('+scrollSeviye/120+'px)');
  $('#blur').css('-webkit-backdrop-filter', 'blur('+scrollSeviye/120+'px)');
});