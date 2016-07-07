
$( document ).ready(function() {
     
  function scrollToAnchor(aid){
        var aTag = $("h1[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
  }
  
  $("#resume-link").click(function() {
        scrollToAnchor('resume');
  });

  $("#projects-link").click(function() {
        scrollToAnchor('projects');
  });

  $("#papers-link").click(function() {
        scrollToAnchor('papers');
  });

  $("#home-link").click(function() {
        scrollToAnchor('home');
  });

});
