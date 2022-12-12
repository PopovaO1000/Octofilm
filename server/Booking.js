import promise from "mysql2/promise";
import bluebird from "bluebird";

class Booking{
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
            const [rows, fields] = await connection.execute("SELECT `zal`.`mesta` as `zal` FROM `seansi` LEFT JOIN `zal` ON `seansi`.`id_zal` = `zal`.`id_zal` LEFT JOIN `films` ON `films`.`id_film` = `seansi`.`id_film` WHERE `seansi`.`id_seans` = ?",[id]);
            const [rows1, fields1] = await connection.execute("SELECT `booking`.`mesto` FROM `seansi` RIGHT JOIN `booking` ON `seansi`.`id_seans` = `booking`.`id_seans` WHERE `seansi`.`id_seans` = ?",[id]);
            return {rows1,rows};
        } catch (e) {
            return "Некорректные данные";
        }
    }
    async insert({email,id_seans, seatArr}) {
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
            while (seatArr.length>0){
                const [rows1, fields1] = await connection.execute("INSERT INTO `booking`(`id_seans`, `mail`, `mesto`, `cost`) VALUES (?, ?, ?, ?)",[id_seans, email, seatArr.pop(), 300]);
            }
        } catch (e) {
            return "Некорректные данные";
        }
    }
}

export default new Booking();