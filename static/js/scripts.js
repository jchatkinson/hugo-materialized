$(document).ready(function(){
    // Pushpin (sticky) box of social links
//    $('.social-box').pushpin({ top: $("main").offset().top });
    
    var mybutton = $("#menu-collapser");
    var pos = $("#menu-collapser-holder").position();
    var width = $("#menu-collapser-holder").outerWidth();
    var buttonwidth = mybutton.outerWidth();
    mybutton.css({
        position: "absolute",
//        top: (pos.top - buttonwidth/2) + "px",
//        left: (pos.left + width - buttonwidth/2) + "px"
        top: 200 + "px",
        left: 200 + "px",
    }).show();
    
  // Initialize collapse button
  $(".button-collapse").sideNav();
    
  });