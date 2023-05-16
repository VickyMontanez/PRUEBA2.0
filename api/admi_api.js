const url = "http://localhost:4000";

export default {
/* Funcion para que el admi añada teams*/  
    async addTeams(team) {
        try {
            let addData = await (await fetch(`${url}/team`, {
                method:"POST",
                body: JSON.stringify(team),
                headers:{"Content-Type":"application/json"}
            })).json();
            return addData
        } catch (error) {
            console.log(error);
        }
    },

/* Funcion para que el admi se le muestren los teams*/
    async showTeams(){
        try {
            let config = {
                method:"GET",
                headers:{"Content-Type":"application/json"},
            };
            let showData = await fetch(`${url}/team`,config);
            let results = await showData.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    },

/* Funcion para que el admi elimine teams*/
    async deleteTeams(){
        try {
            await fetch(`${url}/team`,{method: "DELETE"});
        } catch (error) {
            console.log(error);
        }
    },

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/* Funcion para que el admi añada skills a evaluar*/
async addSkills(skill) {
    try {
        let addData = await (await fetch(`${url}/skill`, {
            method:"POST",
            body: JSON.stringify(skill),
            headers:{"Content-Type":"application/json"}
        })).json();
        return addData
    } catch (error) {
        console.log(error);
    }
},

/* Funcion para que el admi se le muestren las skills*/
async showSkills(){
    try {
        let config = {
            method:"GET",
            headers:{"Content-Type":"application/json"},
        };
        let showData = await fetch(`${url}/skill`,config);
        let results = await showData.json();
        return results;
    } catch (error) {
        console.log(error);
    }
},

/* Funcion para que el admi elimine skills*/
async deleteSkills(){
    try {
        await fetch(`${url}/skill`,{method: "DELETE"});
    } catch (error) {
        console.log(error);
    }
},

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Funcion para que el admi añada modulos de las skills*/
async addModules(module) {
    try {
        let addData = await (await fetch(`${url}/modulo_skill`, {
            method:"POST",
            body: JSON.stringify(module),
            headers:{"Content-Type":"application/json"}
        })).json();
        return addData
    } catch (error) {
        console.log(error);
    }
},

/* Funcion para que el admi se le muestren los modulos de las skills*/
async showModules(){
    try {
        let config = {
            method:"GET",
            headers:{"Content-Type":"application/json"},
        };
        let showData = await fetch(`${url}/modulo_skill`,config);
        let results = await showData.json();
        return results;
    } catch (error) {
        console.log(error);
    }
},

/* Funcion para que el admi elimine modulos de las skills*/
async deleteSkills(){
    try {
        await fetch(`${url}/modulo_skill`,{method: "DELETE"});
    } catch (error) {
        console.log(error);
    }
},

}
