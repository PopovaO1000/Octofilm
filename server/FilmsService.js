import Films from "./Films.js";

class FilmsService{
    async fetchAll(){
        let returnVal;
        await Films.fetchAll().then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
}

export default new FilmsService();