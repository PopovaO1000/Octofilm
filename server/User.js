import promise from "mysql2/promise";
import bluebird from "bluebird";


class User{
    async authUser({login, pwd}){
// create the connection, specify bluebird as Promise
        const connection = await promise.createConnection({host:'localhost', user: 'root',password: '', database: 'octofilm', Promise: bluebird});
// query database
        const [rows, fields] = await connection.execute("SELECT * FROM `users` WHERE `login` = ? AND `pwd` = ?",[login, pwd]);
        return rows;
    }
}

export default new User();