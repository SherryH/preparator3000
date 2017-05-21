$(document).ready(function(){
  $('button').click(function(){
    $('button').animate({backgroundColor: 'red'});
    $('button').effect( "shake" );
    $('button').animate({backgroundColor: 'green'});
  });
});