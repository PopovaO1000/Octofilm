import axios from "axios";
axios.defaults.withCredentials = true;

export const auth = (id) => {
    const formData = new FormData(id);
    axios.post('http://localhost:3001/auth',formData)
    .then((res)=>{
       console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
}