const productos = [
    {
        id: 1,
        nombre: 'Camisa',
        precio: 10000,
        marca: 'Nike',
        descripcion: 'Camisa de algodón',
        promocion: true
    },
    {
        id: 2,
        nombre: 'Pantalon',
        precio: 20000,
        marca: 'Adidas',
        descripcion: 'Pantalon de mezclilla',
        promocion: false
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 30000,
        marca: 'Puma',
        descripcion: 'Zapatos de cuero',
        promocion: true
    },
    {
        id: 4,
        nombre: 'Gorra',
        precio: 40000,
        marca: 'Adidas',
        descripcion: 'Gorra de tela',
        promocion: false
    },
    {
        id: 5,
        nombre: 'Medias',
        precio: 50000,
        marca: 'Reebok',
        descripcion: 'Medias de algodón',
        promocion: true
    },
    {
        id: 6,
        nombre: 'Short',
        precio: 60000,
        marca: 'Adidas',
        descripcion: 'Short de tela',
        promocion: false
    },
    {
        id: 7,
        nombre: 'Chaqueta',
        precio: 70000,
        marca: 'Fila',
        descripcion: 'Chaqueta de cuero',
        promocion: true
    },
    {
        id: 8,
        nombre: 'Bufanda',
        precio: 80000,
        marca: 'New Balance',
        descripcion: 'Bufanda de lana',
        promocion: false
    }
];

// for(let ropa of productos){
//     console.log(ropa)
// }

//! ForEach

// productos.forEach(function(prod, indice){


//     document.write(`${indice + 1} - ${prod.nombre} al precio de ${prod.precio} <br>`)


// })

// Map

/* const productosFinal = productos.map(function(producto,indice){ */
/*  */
/*     const productoModificado = { */
/*  */
/*         name: producto.nombre.toUpperCase(), */
/*         price: producto.precio * 1.3 */
/*  */
/*     } */
/*  */
/*     return productoModificado */
/* }) */
/*  */
/* console.log(productosFinal) */
/* console.log(productos) */

// Filter

/* const productosFiltrados = productos.filter(function(prod,idx){ */
/*  */
/*     if(prod.promocion){ */
/*  */
/*         return true */
/*     } else { */
/*         return false */
/*     } */
/*  */
/* }) */
/*  */
/* console.log("Productos filtrados:", productosFiltrados) */

// Find

/* const productoEncontrado = productos.find ((producto)=>{ */
/*  */
/*     if(producto.marca === "Adidas"){ */
/*         return true */
/*     } */
/*  */
/* }) */
/*  */
/* console.log(productoEncontrado) */

//Find Index

/* const indiceProductoBuscado = productos.findIndex((producto)=>{

    if(producto.nombre === 'Short'){
        return true
    }

    return false

})

if(indiceProductoBuscado >= 0){
    alert("El producto se encontro")
}else{
    console.warn ("El producto no se encontro")
}

console.log(indiceProductoBuscado)

productos.splice(indiceProductoBuscado, 1)

console.log(productos) */

// Some

/* const hayPromocion = productos.some (prod => {

    if(prod.promocion){
        return true
    }
} )

console.log (hayPromocion)  */

// Every

/* const todosEnPromo = productos.every(p =>{

    if(p.promocion){
        return true
    }
})

console.log(todosEnPromo) */

// Reverse

/* productos.reverse();

console.log(productos) */

// Slice

/* const productosSlice = productos.slice (2,6)

console.log (productosSlice) */

// Sort

/* console.log( [11,3,5,7,1,-1,4,11,9].sort ())*/

/* const arraySort= [11,3,5,7,1,-1,4,11,9].sort ((a,b) =>{

    if(a>b){
        return 1
    }

    if(a<b){
        return -1
    }

    return 0;

})

console.log(arraySort)

const arraySort2= [11,3,5,7,1,-1,4,11,9].sort ((a,b) =>{

    if(a<b){
        return 1
    }

    if(a>b){
        return -1
    }

    return 0;

})

console.log(arraySort2) */

/* const arrayNombres = ["Nicolas", "Cristian", "Mauricio", "Dario", "Ramiro"].sort((a,b) =>{

    if(a.toLowerCase () > b.toLowerCase ()) return 1
    if(a.toLowerCase () < b.toLowerCase ()) return -1
    return 0
})

console.log(arrayNombres) */

// Reduce

const costoTotal = productos.reduce((acumulador, prod) => {

    acumulador = acumulador + prod.precio

    return acumulador

}, 0 /* En cuanto quiero que inicie el acumulador */ )

console.log(`Tu carrito de compra tiene un costo total de: ${costoTotal}`)

