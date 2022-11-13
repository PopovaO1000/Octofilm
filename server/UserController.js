// import UserService from "./UserService.js";
// class UserController {
//      authUser(req, res){
//         try{
//             const user = UserService.authUser(req.body);
//             res.cookie('id',user[0].id_user,{maxAge: 1*24*60*60*1000, httpOnly: true});
//             return res.json(user);
//             // res.send(post);
//         }
//         catch (e){
//             // return res.status(500).json(e.message);
//             console.log("ttt");
//         }
//     }
// }
//
// export default new UserController();

import User from "./User.js";

class PostController{
    authUser(req, res){
        try{
            const {login, pwd} = req.body;
            const post = User.authUser({login, pwd});
            console.log(post);
            res.send(post);
        }
        catch (e){
            res.status(500).json(e);
        }
    }
}

export default new PostController();