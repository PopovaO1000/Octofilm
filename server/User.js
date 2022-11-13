import promise from "mysql2/promise";
import bluebird from "bluebird";


class User{
    async authUser({login, pwd}) {
        try {
            // create the connection, specify bluebird as Promise
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
// query database
            const [rows, fields] = await connection.execute("SELECT * FROM `users` WHERE `login` = ? AND `pwd` = ?", [login, pwd]);
            if(rows[0] === undefined){
                rows[0] = "Такого пользователя не существует"
            }
            return rows[0];
        } catch (e) {
            return "Некорректные данные";
        }
    }
    async regUser({fio, login, email, pwd, pwd2}){
// create the connection, specify bluebird as Promise
        const connection = await promise.createConnection({host:'localhost', user: 'root',password: '', database: 'octofilm', Promise: bluebird});
// query database
        const [rows1, fields1] = await connection.execute("SELECT * FROM `users` WHERE `login` = ? ", [login]);
        if(rows1[0] === undefined){
            const [rows, fields] = await connection.execute("INSERT INTO `users`(`id_user`, `name`, `login`, `email`, `pwd`) VALUES (NULL,?,?,?,?)",[fio, login, email, pwd]);
        }
        else{
            return "Такой пользователя уже существует"
        }
    }
}

export default new User();