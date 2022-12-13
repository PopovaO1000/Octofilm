import BookingService from "./BookingService.js";

class BookingController{
    getOne(req,res){
        const id = req.query.id;
        BookingService.getOne(id).then((result)=>{
            let returnVal = {
                zal: result.zal,
                notFreePlaces: result.mestoArr
            }
            res.send({message: returnVal});
        });
    }
    insert(req,res){
        const {email,id_seans, seatArr} = req.body;
        BookingService.insert({email,id_seans, seatArr}).then((result)=>{
            if(typeof result == "string"){
                res.send({message:result});
            }
            else{
                res.send();
            }
        })
    }
    getUserBookings(req,res){
        const email = req.query.email;
        BookingService.getUserBookings(email).then((result)=>{
            if(typeof result == "string"){
                res.send({message:result});
            }
            else{
                res.send({message:result});
            }
        })
    }
    deleteBooking(req,res){
        const id = req.query.id;
        BookingService.deleteBooking(id).then((result)=>{
            if(typeof result == "string"){
                res.send({message:result});
            }
            else{
                res.send({message:result});
            }
        })
    }
}

export default new BookingController();