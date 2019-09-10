$(document).ready(function () {
    $(".box_bars").on("click", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("ativo")) {
            $(this).addClass("ativo");
            $(this).html("<span class='fa fa-times'></span>");
            $(".titulo_produto").css("display", "none");
            $(".container_menu01").fadeToggle(1000);
        } else {
            $(this).removeClass("ativo");
            $(this).html("<span class='fa fa-bars'></span>");
            $(".container_menu01").fadeToggle(1000);
               $(".titulo_produto").css("display", "block");
        }
    });
});
