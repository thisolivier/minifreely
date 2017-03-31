$( document ).ready( function() {
  // Scripts go here
  $('li').click(function(event){
    alert('hello');
    $('.selected').css({
      display: 'block'
    })
  });

  $('.big-img').click(function(){
    alert('goodbye');
    $('.selected').css({
      display: 'none'
    })
  });
});
