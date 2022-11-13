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
            if(rows[0].length == 0){
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
        const [rows, fields] = await connection.execute("INSERT INTO `users`(`id_user`, `name`, `login`, `email`, `pwd`) VALUES (NULL,?,?,?,?)",[fio, login, email, pwd]);
        return rows;
    }
}

export default new User();