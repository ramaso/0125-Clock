let signoZodiaco = prompt ("Ingrese su signo del zodiaco")
console.log(signoZodiaco)

signoZodiaco = signoZodiaco.toLowerCase()
console.log(signoZodiaco)
//Definimos multiples casos para el switch

switch(signoZodiaco){
    case "aries":
        console.log("Su fecha de nacimiento es del 21 de marzo al 19 de abril")
        break;
    case "tauro":
        console.log("Su fecha de nacimiento es del 20 de abril al 20 de mayo")
        break;
    case "geminis":
        console.log("Su fecha de nacimiento es del 21 de mayo al 20 de junio")
        break;
    case "cancer":
        console.log("Su fecha de nacimiento es del 21 de junio al 22 de julio")
        break;
    case "leo":
        console.log("Su fecha de nacimiento es del 23 de julio al 22 de agosto")
        break;
    case "virgo":
        console.log("Su fecha de nacimiento es del 23 de agosto al 22 de septiembre")
        break;
    case "libra":
        console.log("Su fecha de nacimiento es del 23 de septiembre al 22 de octubre")
        break;
    case "escorpio":
        console.log("Su fecha de nacimiento es del 23 de octubre al 21 de noviembre")
        break;
    case "sagitario":
        console.log("Su fecha de nacimiento es del 22 de noviembre al 21 de diciembre")
        break;
    case "capricornio":
        console.log("Su fecha de nacimiento es del 22 de diciembre al 19 de enero")
        break;
    case "acuario":
        console.log("Su fecha de nacimiento es del 20 de enero al 18 de febrero")
        break;
    case "piscis":
        console.log("Su fecha de nacimiento es del 19 de febrero al 20 de marzo")
        break;

    default:
        console.log("❌ No es un signo del zodiaco válido")
        break;

}

