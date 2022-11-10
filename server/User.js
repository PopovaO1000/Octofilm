import con from "mysql";

const db = con.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'octofilm'
});

class User{
     authUser({login, pwd}){
        db.query("SELECT * FROM `users` WHERE `login` = ? AND `pwd` = ?",[login, pwd], (err,result)=>{
            if(err){
                return (
                    err
                );
            };
            if(result){
                console.log(result);
                return(
                    result
                );
            }
        });
    }
}

export default new User();