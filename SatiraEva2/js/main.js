//funcion Login con la variable user y pass

function login() {
    var user = "Satira@gmail.com";
    var pass = "1234"
//haciendo uso de las variables para obtener el valor
//del input del correo y el de contraseña

    user = document.getElementById("exampleInputEmail1").value;
    pass = document.getElementById("exampleInputPassword1").value;

//Condiciones    
    if (user != "Satira@gmail.com") {
        window.alert("Usuario Incorrecto.");
    } else if (pass != "1234") {
        window.alert("Cotraseña Incorrecto.");
    }else{
        window.location = "catalogo.html";
    }
}