import User from "./User.js";

class PostController{
     authUser(req, res){
        try{
            const login = req.body.login;
            console.log(req.body.login);
            const pwd = req.body.pwd;
            // const {login, pwd} = req.body;
            const post = User.authUser({login, pwd});
            res.send(post);
        }
        catch (e){
            res.status(500).json(e);
        }
    }
}

export default new PostController();