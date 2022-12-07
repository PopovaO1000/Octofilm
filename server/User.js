import promise from "mysql2/promise";
import bluebird from "bluebird";


class User{
    async getUser({login}) {
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
            const [rows, fields] = await connection.execute("SELECT * FROM `users` WHERE `login` = ?", [login]);
            if(rows[0] === undefined){
                rows[0] = "Некорректные данные"
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
    async updateUser({fio, login, email, pwd, id}){
// create the connection, specify bluebird as Promise
        const connection = await promise.createConnection({host:'localhost', user: 'root',password: '', database: 'octofilm', Promise: bluebird});
// query database
        const [rows, fields] = await connection.execute("UPDATE `users` SET `name`= ?,`login`= ?,`email`= ? WHERE `id_user` = ?",[fio, login, email, id]);
    }
    async updateUserPass({pwd2, id}){
// create the connection, specify bluebird as Promise
        const connection = await promise.createConnection({host:'localhost', user: 'root',password: '', database: 'octofilm', Promise: bluebird});
// query database
        const [rows, fields] = await connection.execute("UPDATE `users` SET `pwd`= ? WHERE `id_user` = ?",[pwd2, id]);
    }
}

export default new User();