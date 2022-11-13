import UserService from "./UserService.js";

class UserController{
    authUser(req, res){
        try{
            const {login, pwd} = req.body;
            UserService.authUser({login, pwd}).then(a=>{
                if(typeof a == "string"){
                    res.send({message:a});
                }
                else{
                    res.cookie('id',a.id_user,{maxAge: 1*24*60*60*1000});
                    res.send();
                }
            });
        }
        catch (e){
            return res.send({message:"Ошибка сервера"});
        }
    }
    regUser(req, res){
        try{
            const {fio, login, email, pwd, pwd2} = req.body;
            UserService.regUser({fio, login, email, pwd, pwd2}).then(a=>{
                if(typeof a == "string"){
                    res.send({message:a});
                }
                else{
                    res.cookie('id',a.id_user,{maxAge: 1*24*60*60*1000});
                    res.send();
                }
            });
        }
        catch (e){
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController();