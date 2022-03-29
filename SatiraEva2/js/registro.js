//funcion captura, obtiene los valores de los input con los respectivos ID
//y los almacena en las variables
function captura(){
    var nombre = document.getElementById("nombre1").value;
    var apellido = document.getElementById("apellido1").value;
    var correo = document.getElementById("correo1").value;
    var contrasena = document.getElementById("contrasena1").value;

 //condiciones con alert que nos alerta de los campos que faltan llenar
//.focos hace que el curso se posicione en el input vacio con el fin de, que 
//se pueda llenar ese campo
    if(nombre == ""){
        alert("El nombre es obligatorio.");
        document.getElementById("nombre1").focus();
    }else if(apellido == ""){
        alert("El apellido es obligatorio.");
        document.getElementById("apellido1").focus();
    }else if(correo == ""){
        alert("El correo es obligatorio.");
        document.getElementById("correo1").focus();
    }else if(contrasena == ""){
        alert("La contraseña es obligatorio.");
        document.getElementById("contrasena1").focus();
    }else{
        alert("Usuario Registrado")
        console.log(nombre,apellido,correo,contrasena); //console.log nos permite imprimir los datos en la consola
        document.getElementById("nombre1").value="";
        document.getElementById("apellido1").value="";
        document.getElementById("correo1").value="";
        document.getElementById("contrasena1").value="";
    }
}
