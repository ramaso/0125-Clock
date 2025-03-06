for(let counter = 1 ; counter <= 100; counter ++){

    console.log("Iteracion numero: " + counter)

}

for(let counter = 100 ; counter >= 1 ; counter--){

    console.log("Iteracion numero: " + counter)
}

let numero = prompt("Ingrese un numero")

if(numero >= 1){

    for(let i = 1; i <= numero ; i++ ){

        if( i%3 === 0){

            console.log(`el numero ${i} es divisible por 3`)

        }

    }

}else{

    alert("Ingrese un dato valido")
}