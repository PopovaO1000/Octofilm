import User from "./User.js";

class UserService {
    async authUser(clientData){
        try{
            let g;
            await User.authUser(clientData).then(a=>{
                g = a;
            });
            return g;
        }
        catch (e){
            return e;
        }
    }
}

export default new UserService();