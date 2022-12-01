import NewsService from "./NewsService.js";

class NewsController{
    fetchAll(req,res){
        NewsService.fetchAll().then((result)=>{
            res.send({message: result});
        });
    }
    getOne(req,res){
        NewsService.getOne(req.query.id).then((result)=>{
            res.send({message: result});
        });
    }
}

export default new NewsController();