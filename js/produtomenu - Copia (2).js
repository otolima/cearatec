$(document).ready(function(){
	// on() Primeiro Parametro e o evento qualquer um do javascript, e o Segundo function anonima
	$(".titulo_produto").on('click',function(e){
        e.preventDefault();
		//$(".box_menu").slideToggle(1000); 
		//if($(".titulo_produto"))
		//$(".box_menu").fadeToggle(1000);
      
       if(!$(this).hasClass("ativo")) {
           $(this).addClass("ativo");
           $(".titulo_produto p span ").html("<span class='fa fa-arrow-circle-o-up'></span");
           $(".box_menu").fadeToggle();
       } else {
            $(this).removeClass("ativo");
            $(".titulo_produto p span ").html("<span class='fa fa-arrow-circle-o-down'></span");
           $(".box_menu").fadeToggle();
       }
        
	});
    $(".box_menu ul li a").on("hover",function(e){
        e.preventDefault();
        $(".box_menu ul li ul").fadeIn(10000);
    }).on("mouseleave", function(){
        $(this).css({
            color:"red",
            background:"black"
        });
    });
});