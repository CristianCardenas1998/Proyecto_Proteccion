var contador = 1;

//Función canvas para dibujar las imagenes con un intervalo de 1s

function canvas() {
    setInterval(() => {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            imagen = canvas.getContext("2d");
            var img = new Image();
            img.src = `img/imagen (${contador}).jpg`
            img.onload = function() {
                imagen.drawImage(img, 0, 0, 1123, 796)
            }
        }
        if (contador <= 188) {
            contador++;
        }
        if (contador > 188) {
            contador = 1;
            canvas1()
        }
    }, 1000);
}

//Función para iniciar nuevamente la función canvas

function canvas1() {
    canvas()
}