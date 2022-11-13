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
            return "Ошибка авторизации";
        }
    }
    async regUser(clientData){
        try{
            let g;
            await User.regUser(clientData).then(async (a)=>{
                g = a;
                if(!a){
                    await User.authUser(clientData).then(a=>{
                        g = a;
                    });
                }
            });
            return g;
        }
        catch (e){
            return e;
        }
    }
}

export default new UserService();