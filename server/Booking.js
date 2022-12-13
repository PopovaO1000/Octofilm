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
    async getUserBookings(email){
        try{
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
            const [rows1, fields1] = await connection.execute("SELECT `booking`.`mesto` AS `mesto`, `booking`.`id_booking` AS `id_booking`, `booking`.`cost` AS `cost`, `films`.`name` AS `film_name`, `zal`.`name` AS `zal_name`, `seansi`.`time` AS `time`, `seansi`.`date` AS `date`  FROM `booking` LEFT JOIN `seansi` ON `booking`.`id_seans` = `seansi`.`id_seans` LEFT JOIN `films` ON `seansi`.`id_film` = `films`.`id_film` LEFT JOIN `zal` ON `seansi`.`id_zal` = `zal`.`id_zal` WHERE `mail` = ?", [email]);
            return rows1;
        }
        catch (e){
            return "Некорректные данные";
        }
    }
    async deleteBooking(id){
        try{
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
            const [rows1, fields1] = await connection.execute("DELETE FROM `booking` WHERE `id_booking` = ?", [id]);
            return 1;
        }
        catch (e){
            return "Некорректные данные";
        }
    }
}

export default new Booking();