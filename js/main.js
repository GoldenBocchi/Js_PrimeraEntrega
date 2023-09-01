//Declaracion de Variables
console.log("Seleccione un número: ")
console.log("(1) -> Chico [De 1 a 10 intentos] ")
console.log("(2) -> Mediano [De 1 a 20 intentos] ")
console.log("(3) -> Grande [De 1 a 30 intentos] ")

const opciones={
    1:'Chico',
    2:'Mediano',
    3:'Grande'
}

const intentos={
    1:10,
    2:20,
    3:30
}

/* 
    El siguiente programa esta pensado como un juego en el cual inflas un globo. Mientras mas lo infles mas vas sumando puntos mediante una formula aleatoria.
    Se te da a elegir 3 opciones (duración del juego). Cuando llegues al último número del intento, digamos Mediano -> 20 intentos, el juego termina y puedes 
    visualizar la puntuación maxima que alcanzaste. La idea original era generar un boton que puedas aplastar (pero aun no manejamos eventos en clase)
*/

/*
    Se procede a generar 2 funciones: Introduccion -> Da origen a la selección por parte del jugador y ejecuta la lógica del juego
                                      inicioJuego -> Contiene la lógica detras del juego
*/

introduccion();

function introduccion(){

    let flag = 0;
    while(flag!=1){
    var seleccion = parseInt(prompt("Seleccione numero")) // Uso de variable VAR para poder usarla fuera del encapsulamiento del loop
        if(seleccion === 1 || seleccion === 2 || seleccion === 3){
            console.log("Usted selecciono: " + opciones[seleccion]);
            flag = 1;
        } else {
            alert("Su seleccion no esta disponible, vuelva a ingresar")
        }
    }

    let dummy = intentos[seleccion];
    inicioJuego(dummy);
}


function inicioJuego (vidas) {

    let flag=0;
    let puntuacion = 0;
    let MinRisk= 1;
    let MaxRisk= vidas;
    let ronda=0;

    while(flag!=vidas){

        let regla1 = Math.ceil(Math.random()*(MaxRisk-MinRisk)+MinRisk);
        ronda += 1;
        console.log("-- Intento: " + ronda+ " --");

        puntuacion += regla1;
        flag = regla1;
        
        console.log("puntuacion en esta ronda: " + puntuacion) // Acumulacion de numeros que sale de manera aleatoria por ronda
        console.log("flag actual es: " + flag); // Visualizador del numero que ha salido de manera aleatoria
    }

    console.log('Usted obtuvo la puntuación final de: ' + puntuacion);
    console.log('ronda maxima: ' + ronda);
}
