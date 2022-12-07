import Schedule from "./Schedule.js";

class ScheduleService{
    async fetchAll(date){
        let returnVal;
        await Schedule.fetchAll(date).then((result)=>{
            const films = result.rows.map((filmRow)=>{
                let film = [filmRow.id_seans,filmRow.name, filmRow.date, filmRow.img_poster];
                result.rows.map((innerRow)=>{
                    if(film[1] === innerRow.name)
                        film.push(innerRow.time);
                });
                return film;
            });
            films.forEach((filmRow,i)=>{
                films.forEach((innerRow,j)=>{
                    if(filmRow[1] === innerRow[1] && i !== j){
                        films.splice(j,1)
                    }
                });
            })
            returnVal = {
                result: result.rrr,
                result2: films
            };
        });
        return returnVal;
    }
}

export default new ScheduleService();