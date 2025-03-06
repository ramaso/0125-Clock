let numeroMes = prompt("Ingrese mes de nacimiento")

while(numeroMes < 1 || numeroMes > 12 || isNaN(numeroMes)){

    console.log("Mes incorrecto")
    
    numeroMes = prompt("Ingrese mes de nacimiento de nuevo, por favor (formato número)")
}

let numeroRandom;

let counter = 1;

do{
    numeroRandom = Math.random () * 100

    numeroRandom = Math.round (numeroRandom)

    console.log(counter + "Numero obtenido aleatoriamente: " + numeroRandom)

    counter++
} while ("numeroRandom !=87")

console.log ("Obtuve el numero 87")