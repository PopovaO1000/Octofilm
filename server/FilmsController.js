import FilmsService from "./FilmsService.js";

class FilmsController{
    fetchAll(req,res){
        FilmsService.fetchAll().then((result)=>{
            res.send({message: result});
        });
    }
    getOne(req,res){
        FilmsService.getOne(req.query.id).then((result)=>{
            res.send({message: result});
        });
    }

}

export default new FilmsController();