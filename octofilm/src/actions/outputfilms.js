import axios from "axios";

export const outputFilms = async() => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:3001/films/output')
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

export const getOneFilm = async(id) => {
    let returnVal;
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:3001/films/getOne/?id=${id}`)
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