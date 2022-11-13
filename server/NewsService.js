import News from "./News.js";

class NewsService{
    async fetchAll(){
        let returnVal;
        await News.fetchAll().then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
}

export default new NewsService();