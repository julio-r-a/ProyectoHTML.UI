//agrandar tamaño
$("#mov").click(function () { 
    $(this).animate({
        left: "+=100px",
        height: "+=50px",
        width: "+=50px",
    }, 10);
});


$("#exampleCheck1").click(function () {
    $("img").slideToggle(4000); //aparezca y aparezca 
});


