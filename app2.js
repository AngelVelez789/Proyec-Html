var username = document.getElementById("nombre");




function valid(){

    if (username.value == "lo123" ){
        document.write("Usuario correcto")
        window.location.href = "index.html";

    }


    else 
        if (username.value  !="lo123"){
            console.log("Usuario incorrecto");
        }

}
