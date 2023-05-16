import admi_api from "../api/admi_api.js";

let formTeams = document.querySelector("#team");

formTeams.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let data = await admi_api.addTeams(formData);
    console.log(data);
    formTeams.reset();
})

let formSkills = document.querySelector("#skills");
formSkills.addEventListener("(submit", async(e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let data = await admi_api.addSkills(formData);
    console.log(data);
    formSkills.reset();
})

let formModules = document.querySelector("#modulos");
formModules.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let data = await admi_api.addModules(formData);
    console.log(data);
    formModules.reset();
})