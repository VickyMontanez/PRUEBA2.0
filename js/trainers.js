import trainers_api from "../api/trainers_api.js";

let formReclutas = document.querySelector("#reclutas");


formReclutas.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let data = await trainers_api.addRecluta(formData);
    console.log(data)
    formReclutas.reset();
});

let formEvaluacion = document.querySelector("#evaluacion");
formEvaluacion.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let formNotas = Object.fromEntries(new FormData(e.target));
    console.log(formNotas);
    let data = await trainers_api.addNota(formNotas);
    console.log(data);
    formEvaluacion.reset();
});