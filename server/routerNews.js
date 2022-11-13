import {Router} from "express";
import NewsController from './NewsController.js';

const routerNews = new Router();

routerNews.get('/output', NewsController.fetchAll);
export default routerNews;