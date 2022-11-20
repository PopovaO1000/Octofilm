import axios from "axios";

export const outputSchedule = async(date) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:3001/schedule/output/?date=${date}`)
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