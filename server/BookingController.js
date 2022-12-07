import BookingService from "./BookingService.js";

class BookingController{
    getOne(req,res){
        const name = req.query.name;
        const date = req.query.date;
        const time = req.query.time;
        BookingService.getOne({name,date,time}).then((result)=>{
            let returnVal = {
                zal: result.zal,
                notFreePlaces: result.mestoArr
            }
            res.send({message: returnVal});
        });
    }
}

export default new BookingController();