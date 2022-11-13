import User from "./User.js";

class UserService {
    authUser(clientData){
        try{
            const user = User.authUser(clientData);
            console.log(user);
            return user;
        }
        catch (e){
            return e;
        }
    }
}

export default new UserService();