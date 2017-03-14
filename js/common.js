$(document).ready(function(){
    $("nav ul.navig li.menu").mouseenter(function(){
    	$("div.submenu").slideDown("slow");
    });
    $("nav ul.navig li").not("li.menu").mouseenter(function(){
    	$("div.submenu").slideUp("slow");
    });

    $("div.submenu").mouseleave(function(){
    	$(this).slideUp("slow");
    });

    $("button.navigation").click(function(){
        $("ul.navig").slideToggle("slow");
    });

  	window.onscroll = function() {
        if (window.pageYOffset > 500) {
            $("div#banner").fadeIn("slow");
        } 
        if (window.pageYOffset > 700) {
        	$("div.block").addClass("animated flip")
        }
        if (window.pageYOffset > 1400) {
        	$("p.animatedText").addClass("animated bounceIn")
        }
        if (window.pageYOffset > 1500) {
        	$("img[src='images/logos.gif']").addClass("animated bounceIn")
        }

        if (window.pageYOffset > 1600) {
        	$("section#contacts").addClass("animated flash")
        }
    };
});



