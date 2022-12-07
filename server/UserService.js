import User from "./User.js";
import createHash from "./functions.js";
import {compareHash} from "./functions.js";
class UserService {
    async authUser(clientData){
        try{
            const passHash = await User.getUser(clientData);
            if(await compareHash(clientData.pwd, passHash.pwd)){
                let g;
                await User.getUser(clientData).then(a=>{
                    g = a;
                });
                return g;
            }
        }
        catch (e){
            return "Ошибка авторизации";
        }
    }
    async regUser(clientData){
        try{
            clientData.pwd = await createHash(clientData.pwd);
            let g;
            await User.regUser(clientData).then(async (a)=>{
                g = a;
                if(!a){
                    await User.getUser(clientData).then(a=>{
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
    async updateUser(clientData){
        try{
            const passHash = await User.getUser(clientData);
            if(await compareHash(clientData.pwd, passHash.pwd)){
                let g;
                await User.updateUser(clientData).then(async (a)=>{
                    g = a;
                    if(!a){
                        await User.getUser(clientData).then(a=>{
                            g = a;
                        });
                    }
                });
                return g;
            }
        }
        catch (e){
            return e;
        }
    }
}

export default new UserService();