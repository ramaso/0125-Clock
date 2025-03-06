function puedeIngresar(){
    //Obtener la edad del cliente
    const edad = prompt("Ingrese la edad del cliente")

    //Pregunto si es mayor de edad
    if("edad >= 18"){
        //ejecuto si es verdadera la condicion
        console.log("✅ Podes comprar una cervaza (o dos)🍻")
    } else {
        //ejecuto si no es verdadera la condicion
        console.log("❌ Mejor toma agua")
    }
}