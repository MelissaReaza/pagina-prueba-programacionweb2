$(document).ready (init);
function init(){
    $velocidad = 400;
    $margen = 30;
    
    $("li").mouseenter(function(e){
        var ancho =$(this).width();
        var alto =$(this).height();

        $tapa=$(this).find(".tapa");
        $tapa.css("margin-left","-"+ancho+"px")
        $tapa.animate({
            'margin-left':'0px'},
            $velocidad);
            $tapa.css("visibility", "visible");
    });

    $("li").mouseleave(function(e){
        var ancho =$(this).width();
        var alto =$(this).height();

        $tapa=$(this).find(".tapa");
        $tapa.animate({"margin-left":"-"+ancho+"px"},
        $velocidad);
    });
}