import axios from "axios";

export const getOneSeans = async(film,date,time) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:3001/booking/output/?name=${film}&date=${date}&time=${time}`)
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