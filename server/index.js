import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import router from "./router.js";
import routerFilms from "./routerFilms.js";
import routerNews from "./routerNews.js";
import routerSchedule from "./routerSchedule.js";
import routerBooking from "./routerBooking.js";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api',router);
app.use('/films',routerFilms);
app.use('/news',routerNews);
app.use('/schedule',routerSchedule);
app.use('/booking',routerBooking);


const start = async () => {
    try {
        app.listen(PORT, ()=> console.log('vkus'));
    }
    catch (e){
        console.log(e);
    }
}

start();