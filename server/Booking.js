import promise from "mysql2/promise";
import bluebird from "bluebird";

class Booking{
    async getOne({name,date,time}) {
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
            const [rows, fields] = await connection.execute("SELECT `seansi`.`id_seans` as `id`, `zal`.`mesta` as `zal` FROM `seansi` LEFT JOIN `zal` ON `seansi`.`id_zal` = `zal`.`id_zal` LEFT JOIN `films` ON `films`.`id_film` = `seansi`.`id_film` WHERE `films`.`name` = ? AND `seansi`.`date`= ? AND `seansi`.`time`= ?",[name, date, time]);
            const [rows1, fields1] = await connection.execute("SELECT `booking`.`mesto` FROM `seansi` RIGHT JOIN `booking` ON `seansi`.`id_seans` = `booking`.`id_seans` WHERE `seansi`.`id_seans` = ?",[rows[0].id]);
            return {rows1,rows};
        } catch (e) {
            return "Некорректные данные";
        }
    }
}

export default new Booking();