import axios from "axios";

export const auth = async (data) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.post('http://localhost:3001/api/auth',data)
    .then((res)=>{
        if(res.data.message){
            returnVal = true;
            alert(res.data.message);
        }
    })
        .catch((err)=>{
            returnVal = true;
            alert("Ошибка соединения");
        });
    return returnVal
}

export const reg = async (data) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.post('http://localhost:3001/api/reg',data)
        .then((res)=>{
            if(res.data.message){
                returnVal = true;
                alert(res.data.message);
            }
        })
        .catch((err)=>{
            returnVal = true;
            alert("Ошибка соединения");
        });
    return returnVal
}