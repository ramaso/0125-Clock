const usersStart = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
  },
  {
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
    role: 'CLIENT_ROLE'
  },
  {
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
  },
  {
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'San Luis',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
  },
  {
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'Córdoba',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
  },
  {
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
  },
];

let isEditing;
let userButtonsEdit;

const tableHTML = document.getElementById("table-container");
const tableBodyHTML = document.getElementById("table-body");
const totalHTML = document.getElementById('total');
const userFormHTML = document.querySelector('#user-form');
const btnSubmitHTML = document.querySelector('button[type="submit"]');
const formContainerHTML = document.querySelector('.form-container')
const titleFormHTML = document.querySelector('.titulo-form')

renderUsers(usersStart);

userFormHTML.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const el = evento.target.elements

    if(el["password-repeat"].value != el.password.value){
       Swal.fire("Error", "Las contraseñas no coinciden", "warning")
       return //Sirve para cortar asi no seguimos
        }

       const nuevoUsuario = {
        id: isEditing ? isEditing : crypto.randomUUID(),
        fullname: el.fullname.value,
        email: el.email.value,
        password: el.password.value,
        location: el.location.value,
        image: el.image.value,

        bornDate: new Date(el.bornDate.value).getTime(),

        active: el.active.checked

       }

        if(isEditing){

            const userIndex = usersStart.findIndex( user =>{
                return user.id === isEditing
            })

            usersStart[userIndex] = nuevoUsuario
        }else{

            usersStart.push(nuevoUsuario)
        }

       renderUsers(usersStart)

       isEditing = undefined;

       formContainerHTML.classList.remove("form-edit")
       btnSubmitHTML.classList.remove("btn-success")
       btnSubmitHTML.classList.add("btn-primary")
       btnSubmitHTML.innerText = "Agregar"
       titleFormHTML.innerText = "Cargar usuario"

       userFormHTML.reset()
       el.fullname.focus()
    


})


function renderUsers(arrayUsers){

    tableBodyHTML.innerHTML = '';

    arrayUsers.forEach((user) => {

        tableBodyHTML.innerHTML += `
                                    <tr>
                                        <td class="user-image">
                                            <img src="${user.image}">
                                        </td>
                                        <td class="user-name"> ${user.fullname} </td>
                                        <td class="user-mail"> ${user.email} </td>
                                        <td class="user-location"> ${user.location} </td>
                                        <td class="user-actions">
                                            <button class="btn btn-danger btn-sm"
                                            data-edit="${user.id}">
                                                <i class="fa-solid fa-pen"></i>
                                            </button>

                                            <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        
                                        </td>
                                    </tr>
                                `
        
    });

    updateEditButtons();
}

function updateEditButtons(){

    userButtonsEdit = document.querySelectorAll('button[data-edit]')

    userButtonsEdit.forEach((btn) => {

        btn.addEventListener('click', (evt) => {

            const id = evt.currentTarget.dataset.edit

            completeUserForm(id)
        })
    })
}

function completeUserForm(idUser){

    isEditing = idUser;

    const user = usersStart.find((usr) => {

        if(usr.id === idUser){
            return true
        }
    })

    if(!user){
        alert("No se encontro el usuario")
        return
    }

    const el = userFormHTML.elements;

    el.fullname.value = user.fullname;
    el.email.value = user.email;
    el.password.value = user.password;
    el["password-repeat"].value = user.password;
    el.image.value = user.image;
    el.bornDate.value = user.bornDate;
    el.location.value = user.location

    /* Estilos */

    formContainerHTML.classList.add("form-edit")
    btnSubmitHTML.classList.remove("btn-primary")
    btnSubmitHTML.classList.add("btn-success")
    btnSubmitHTML.innerText = "Editar"
    titleFormHTML.innerText = "Editar usuario"

}

renderUsers(usersStart)

function inputSearch(evt){

    console.log(evt.target.value)

    const search = evt.target.value.toLowerCase();

    const filteredUsers = usersStart.filter((usr) =>{

        if(usr.fullname.toLowerCase().includes(search)){
            
            return true
        }

        return false;

    })

    renderUsers(filteredUsers)

}

function sortDesc(){

    const collator = new Intl.Collator(undefined, {sensitivity: 'base'})

    usersStart.sort((a,b) =>{
    //Metodo 1//
        /* if(a.fullname.toLowerCase() < b.fullname.toLowerCase()){
            return 1;
        }

        if(a.fullname.toLowerCase() > b.fullname.toLowerCase()){
            return -1;
        }

        return 0; */

        //Metodo 2
        return collator.compare(b.fullname, a.fullname)
    })

    renderUsers(usersStart)
}

function sortAsc(){

    const collator = new Intl.Collator(undefined, {sensitivity: 'base'})
    
    usersStart.sort((a,b) =>{

        return collator.compare(a.fullname, b.fullname)
    })

    renderUsers(usersStart)

}

function deleteUser(idUser){

    /* console.log('Voy a borral el usuario ${idUser}') */

    const indice = usersStart.findIndex((usr) =>{

        if(usr.id === idUser){
            return true
        }
    })

    if(indice === -1){

        Swal.fire({

            title: '¡Alerta!',
            text: 'No se encontro el usuario',
            icon: 'warning',

            showConfirmButton: true,
            confirmButtontext: 'De acuerdo'
        })
    }

    Swal.fire({
        
        title: '¿Estas seguro?',
        text: 'Vas a eliminar a este usuario',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonColor: 'red',
        confirmButtonColor: '#2b285b',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) =>{

        if(result.isConfirmed){
            
            Swal.fire({

                title: 'Usuario eliminado 🤔',
                text: 'El usuario fue eliminado con exito',
                icon: 'Success'
            })
            usersStart.splice(indice,1)
            renderUsers(usersStart)
        }
    })

    
}