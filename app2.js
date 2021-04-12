var username = document.getElementById("nombre");




function valid(){

    var mensajesError = [];

    if (username.value == "lo123" ){
        document.write("Usuario correcto")
        window.location.href = "index.html";

    }


    else 
        if (username.value  !="lo123"){
            document.write("Usuario incorrecto");
        }

}
