const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const con = require('mysql');
import router from "./router.js";

const PORT = 3001;
const app = express();
const db = con.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'octofilm'
});

app.use(express.json());

app.use('/api',router);


const start = async () => {
    try {
        app.listen(PORT, ()=> console.log('vkus'));
    }
    catch (e){
        console.log(e);
    }
}

start();