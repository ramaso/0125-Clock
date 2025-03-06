/* const fecha = new Date () */

/* console.log(fecha)

console.dir(fecha)

console.log(fecha.getDate())

console.log(fecha.getDay())

console.log(fecha.getMonth())

console.log(fecha.getFullYear())

console.log(fecha.getMinutes())

console.log(fecha.getTime()) */

const dateHTML = document.getElementById("date")

let nombresDiasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

let nombresMeses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]

/* let nombreDiaSemana = nombresDiasSemana [fecha.getDate()];

let dia = fecha.getDate();

let nombreMes = nombresMeses[fecha.getMonth()];

let year = fecha.getFullYear()

console.log('Bienvenido/a, hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} de ${year}') */

function setClock() {

    const fecha = new Date();

    let hora = fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours();
    let minutos = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes();
    let segundos = formatClockValue(fecha.getSeconds());

    const diaSemana = fecha.getDay();
    const mes = fecha.getMonth();

    const horaHTML = document.getElementById("hora")
    const minutosHTML = document.getElementById("minutos")
    const segundosHTML = document.getElementById("segundos")

    horaHTML.innerText = hora;
    minutosHTML.innerText = minutos;
    segundosHTML.innerText = segundos;

    const nombreDiaSemana = nombresDiasSemana[diaSemana]
    const nombreMes = nombresMeses[mes]

    const dia = fecha.getDate();
    const year = fecha.getFullYear();

    dateHTML.innerText = `Bienvenido, \n Hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} de ${year}`

}

function formatClockValue(value){

    if(value < 10){

        return "0" + value;

    }

    return value;
}

setClock();
setInterval(() =>{
    setClock();
}, 1000)

/* setTimeout( () => {
    alert("Hola este cartel se ejecuto despues de 5 segundos")
} , 5000) */

/* setInterval ( () => {
    console.log("Che pasaron 3 segundos...")
}, 3000) */
