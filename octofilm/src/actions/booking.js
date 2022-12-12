import axios from "axios";

export const bookingInsert = async(data) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.post(`http://localhost:3001/booking/insert`,data)
        .then((res)=>{
            if(res.data.message){
                returnVal = res.data.message;
            }
        })
        .catch((err)=>{
            alert("Ошибка соединения");
        });
    return returnVal;
}