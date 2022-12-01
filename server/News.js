import promise from "mysql2/promise";
import bluebird from "bluebird";

class News{
    async fetchAll() {
        try{
            // create the connection, specify bluebird as Promise
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
// query database
            const [rows, fields] = await connection.execute("SELECT * FROM `news`");
            return rows;
        } catch (e) {
            return "Некорректные данные";
        }
    }
    async getOne(id) {
        try{
            // create the connection, specify bluebird as Promise
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
// query database
            const [rows, fields] = await connection.execute("SELECT * FROM `news` WHERE `id_news`= ?",[id]);
            return rows;
        } catch (e) {
            return "Некорректные данные";
        }
    }
}

export default new News();