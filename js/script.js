$(document).ready(function()
{
  $(window).scroll(function(event)
  {
    var y = $(this).scrollTop();
    if (y >= 100)
    {
      $('.sec2').addClass('animate');
      $('.sec3').addClass('animate');

    }
  });
});