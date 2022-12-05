import Films from "./Films.js";

class FilmsService{
    async fetchAll(){
        let returnVal;
        await Films.fetchAll().then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
    async getOne(id){
        let returnVal;
        await Films.getOne(id).then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
}

export default new FilmsService();