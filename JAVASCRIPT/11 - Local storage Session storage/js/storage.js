
//getItem => Obtener y leer un dato del storage

//setItem => Guardar un dato en el storage

//clear => borra todos los datos en el storage

//removeItem => borra un elemento en el storage


//LocalStorage

localStorage.setItem("userName", "John Doe")
localStorage.setItem("role", "ADMIN_ROLE")
localStorage.setItem("eat", "1145743614")

const user = localStorage.getItem("userName")
console.log(`Bienvenido ${user}`)

localStorage.removeItem("role")

const products = [
    {
        name:"PS5",
        price:1200000
    },
    {
        name:"Switch 2",
        price:900000
    }
]

localStorage.setItem("cartAbandoned", JSON.stringify(products))

const productosLocalStorage = JSON.parse(localStorage.getItem("cartAbandoned"))

console.log(productosLocalStorage)

//SessionStorage