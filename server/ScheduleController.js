import ScheduleService from './SheduleService.js'

class ScheduleController{
    fetchAll(req,res){
        ScheduleService.fetchAll(req.query.date).then((result)=>{
            res.send({message: {
                dates: result.result,
                films: result.result2
                }});
        });
    }
}

export default new ScheduleController();