const url = "http://localhost:4000";

export default {
/* Funcion para que al trainer añada reclutas*/  
    async addRecluta(user) {
        try {
            let addData = await (await fetch(`${url}/reclutas`, {
                method:"POST",
                body: JSON.stringify(user),
                headers:{"Content-Type":"application/json"}
            })).json();
            return addData
        } catch (error) {
            console.log(error);
        }
    },
/* Funcion para que al trainer se le muestren los reclutas*/
    async showRecluta(){
        try {
            let config = {
                method:"GET",
                headers:{"Content-Type":"application/json"},
            };
            let showData = await fetch(`${url}/reclutas`,config);
            let results = await showData.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    },

/* Funcion para que al trainer elimine reclutas*/
    async deleteRecluta() {
        try {
            await fetch(`${url}/reclutas`,{method: "DELETE"});
        } catch (error) {
            console.log(error);
        }
    },
/* Funcion para que al trainer añada notas los reclutas*/
    async addNota(nota) {
        try {
            let addDataNota = await (await fetch(`${url}/notas`, {
                method:"POST",
                body: JSON.stringify(nota),
                headers:{"Content-Type":"application/json"}
            })).json();
            return addDataNota
        } catch (error) {
            console.log(error);
        }
    },

    
}


