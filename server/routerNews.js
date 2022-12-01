import {Router} from "express";
import NewsController from './NewsController.js';

const routerNews = new Router();

routerNews.get('/output', NewsController.fetchAll);
routerNews.get('/getOne', NewsController.getOne);
export default routerNews;