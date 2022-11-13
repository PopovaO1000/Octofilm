import axios from "axios";

export const auth = (data) => {
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3001/api/auth',data)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
}