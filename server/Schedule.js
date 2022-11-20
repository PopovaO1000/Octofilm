import promise from "mysql2/promise";
import bluebird from "bluebird";

class Schedule{
    async fetchAll(date) {
        try{
            let returnVal;
            // create the connection, specify bluebird as Promise
            const connection = await promise.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'octofilm',
                Promise: bluebird
            });
            // const [rows, fields] = await connection.execute("SELECT * FROM `seansi` LEFT JOIN `films` ON `seansi`.`id_film`=`films`.`id_film`");
            const [rrr, rra] = await connection.execute("SELECT `date` FROM `seansi` GROUP BY `date`");
            if(date === 'default'){
                const [rows, fields] = await connection.execute("SELECT * FROM `seansi` LEFT JOIN `films` ON `seansi`.`id_film`=`films`.`id_film` WHERE `date`= ?",[rrr[0].date]);
                returnVal = {
                    rrr: rrr,
                    rows: rows
                };
            }
            else{
                const [rows, fields] = await connection.execute("SELECT * FROM `seansi` LEFT JOIN `films` ON `seansi`.`id_film`=`films`.`id_film` WHERE `date`= ?",[date]);
                returnVal = {
                    rrr: rrr,
                    rows: rows
                };
            }
            return returnVal;
        } catch (e) {
            return "Некорректные данные";
        }
    }
}

export default new Schedule();