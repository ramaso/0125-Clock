function darSaludo(){
    console.log("Bienvenidos al script de funciones")
}

console.log("Me imprimo antes de ejecutar la funcion")

darSaludo();

let alumnos = [];

function cargarAlumno(){
    //Obtener el nombre del alumno
    let nuevoAlumno = prompt("Ingrese el nombre del alumno")

    //Hacer un push al array
    alumnos.push(nuevoAlumno)

    pintarAlumnos();
}

function pintarAlumnos(){
    document.getElementById("listaAlumnos"). innerText = alumnos;
}

function imprimirAlumnos(){
    console.log(alumnos)
}