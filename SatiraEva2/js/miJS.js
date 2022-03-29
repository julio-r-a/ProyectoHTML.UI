
//registro
$("h1").click(function () {
    $("h1").hide(); //ocultar 
});

$("#nom").click(function () {
    $("#nom").hide(); //ocultar 
});

$("#ape").click(function () {
    $("#ape").hide(); //ocultar 
});
$("#ema").click(function () {
    $("#ema").hide(); //ocultar 
});

$("#pas").click(function () {
    $("#pas").hide(); //ocultar 
});

$("#apa").click(function () {
    $("h1,#nom,#ape,#ema,#pas").toggle(1000);
});


$("#nombre1, #apellido1, #correo1, #contrasena1").focus(function () {
    $(this).css("background-color", "red");
});

$("#nombre1, #apellido1, #correo1, #contrasena1").blur(function () {
    $(this).css("background-color", "white");
});

///////////////

$("document").ready(function(){
    var control = 0;
    $(".rounded-3").click(function(){
        if(control == 0){
        $(".card-body").slideUp("fast"); //ocultar con deslizamiento
        control  ++;   
        }else{
            $(".card-body").slideDown("slow");
            control --;
        }
    })
});

$("document").ready(function(){
    var control = 0;
    $(".rounded-4").click(function(){
        if(control == 0){
        $(".card-body1").slideUp("fast");
        control  ++;   
        }else{
            $(".card-body1").slideDown("slow");
            control --;
        }
    })
});

$("document").ready(function(){
    var control = 0;
    $(".rounded-5").click(function(){
        if(control == 0){
        $(".card-body2").slideUp("fast");
        control  ++;   
        }else{
            $(".card-body2").slideDown("slow");
            control --;
        }
    })
});

$("document").ready(function(){
    var control = 0;
    $(".rounded-6").click(function(){
        if(control == 0){
        $(".card-body3").slideUp("fast");
        control  ++;   
        }else{
            $(".card-body3").slideDown("slow");
            control --;
        }
    })
});

$("document").ready(function(){
    var control = 0;
    $(".rounded-7").click(function(){
        if(control == 0){
        $(".card-body4").slideUp("fast");
        control  ++;   
        }else{
            $(".card-body4").slideDown("slow");
            control --;
        }
    })
});

$("document").ready(function(){
    var control = 0;
    $(".rounded-8").click(function(){
        if(control == 0){
        $(".card-body5").slideUp("fast");
        control  ++;   
        }else{
            $(".card-body5").slideDown("slow");
            control --;
        }
    })
});

