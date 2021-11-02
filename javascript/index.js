var contador = 0;

//Funcion cambiar imagen cada 3 segundos.

function cambiarImagen() {
    var imagen = document.getElementById("Imagen");
    setInterval(function() {

        if (contador % 2 == 0) {
            imagen.src = "logo/logo.png"
        } else {
            imagen.src = "logo/A4.svg"
        }
        contador++;
    }, 3000);
}