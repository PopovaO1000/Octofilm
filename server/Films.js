import promise from "mysql2/promise";
import bluebird from "bluebird";

class Films{
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
            const [rows, fields] = await connection.execute("SELECT * FROM `films`");
            return rows;
        } catch (e) {
            return "Некорректные данные";
        }
    }
}

export default new Films();