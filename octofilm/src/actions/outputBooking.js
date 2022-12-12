import axios from "axios";

export const getOneSeans = async(id) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:3001/booking/output/?id=${id}`)
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