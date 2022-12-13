import Booking from "./Booking.js";

class BookingService{
    async getOne(clientData){
        let returnVal;
        await Booking.getOne(clientData).then((result)=>{
            returnVal = {
                zal: result.rows[0].zal
            };
            let mestoArr = result.rows1.map((str)=>{
                return(
                    str.mesto.split('-')
                )
            })
            mestoArr = mestoArr.map((str)=>{
                const num = str[0];
                let innerArr = [];
                let arr = {
                    num: num
                };
                 let Arr2 = mestoArr.map((strInner)=>{
                    if(strInner[0] === str[0] && strInner[1] !== str[1]){
                        innerArr.push(strInner[1]);
                    }
                });
                 innerArr.push(str[1]);
                 arr.innerArr = innerArr;
                 return arr;
            });
            mestoArr.forEach((arr22,i)=>{
                mestoArr.forEach((arr33,j)=>{
                    if(arr33.num === arr22.num && i !== j){
                        mestoArr.splice(j,1)
                    }
                });
            })
            returnVal.mestoArr = mestoArr;
        });
        return returnVal;
    }
    async insert(clientData){
        let returnVal;
        await Booking.insert(clientData).then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
    async getUserBookings(clientData){
        let returnVal;
        await Booking.getUserBookings(clientData).then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
    async deleteBooking(clientData){
        let returnVal;
        await Booking.deleteBooking(clientData).then((result)=>{
            returnVal = result;
        });
        return returnVal;
    }
}

export default new BookingService();