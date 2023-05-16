const url = "http://localhost:4000";

export default {
    async addUser(user) {
        try {
            let addData = await (await fetch(`${url}/users`, {
                method:"POST",
                body: JSON.stringify(user),
                headers:{"Content-Type":"application/json"}
            })).json();
            return addData
        } catch (error) {
            console.log(error);
        }
    },

    async getUser(){
        try {
            let config = {
                method:"GET",
                headers:{"Content-Type":"application/json"},
            };
            let showData = await fetch(`${url}/users`,config);
            let results = await showData.json();
            return results;
        } catch (error) {
            console.log(error);
        }
    },

    async deleteRecluta() {
        try {
            await fetch(`${url}/users`,{method: "DELETE"});
        } catch (error) {
            console.log(error);
        }
    }
}