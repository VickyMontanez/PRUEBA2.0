import login_api from "../api/login_api.js";

let formLogin = document.querySelector("#login");

formLogin.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let data = await login_api.addUser(formData);
    console.log(data);
    formLogin.reset();
});

/* ---------------------------------------------------------------------------- */

const formularioSesion = document.querySelector("#login-iniciar");
formularioSesion.addEventListener("submit",validatelogin);
function validatelogin(e){
    e.preventDefault();
    const user = document.querySelector("#inputUser").value;
    const password = document.querySelector("#inputPassword").value;
    const sesionado = {user, password};
    buscador(sesionado);
    formularioSesion.reset();
};

async function buscador(sesionado){
    if (sesionado.user && sesionado.password) {
        const users = await login_api.getUser();
        users.forEach(element => {
            if (element.user === sesionado.user && element.password === sesionado.password){
                window.location.href = "/index.html"
            }
        });
    }else{
        alert("INGRESA ALGÚN USUARIO")
    }
};

let modalC = document.querySelectorAll(".modalContainer")
let cerrar = document.querySelectorAll(".btn-close");

cerrar.addEventListener("click", function(){
    modalC.classList.toggle("modal-close");
    modalC.style.vissibility = "hidden"
})