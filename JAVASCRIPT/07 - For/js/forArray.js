const paises = [
    'Argentina', //0
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Ecuador',
    'Guyana',
    'Paraguay',
    'Perú',
    'Surinam',
    'Uruguay',
    'Venezuela',
    'México',
    'Costa Rica',
    'Cuba', //14
]

// Metodo 1

for(let i = 0; i < paises.length ; i++){

    console.log(`${i+1} - ${paises[i]}`)
}

for(let i = paises.length -1; i >=0; i--){

    console.log(`${paises.length - i} - ${paises[i]}`)
}

// Metodo 2: let of

for(let paises of paises){
    console.log(paises)
}

// Metodo forEach

paises.forEach(function(paises, indice, arrayOriginal){

    console.log(paises,indice,arrayOriginal)
})

let paisesConA = [];

paises.forEach(function(paises, indice){
    const tieneA = paises.toLowerCase().includes("a")

    if(tieneA){
        paisesConA.push(pais)
    }
})

console.log(paisesConA)