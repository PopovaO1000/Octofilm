import axios from "axios";

export const outputNews = async() => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:3001/news/output')
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

export const getOneNews = async(id) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:3001/news/getOne/?id=${id}`)
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