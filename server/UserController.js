import UserService from "./UserService.js";

class UserController{
    authUser(req, res){
        try{
            const {login, pwd} = req.body;
            UserService.authUser({login, pwd}).then(a=>{
                res.cookie('id',a[0].id_user,{maxAge: 1*24*60*60*1000});
                res.send();
            });
        }
        catch (e){
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController();