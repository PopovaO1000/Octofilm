import {Router} from "express";
import FilmsController from "./FilmsController.js";

const routerFilms = new Router();

routerFilms.get('/output', FilmsController.fetchAll);
routerFilms.get('/getOne', FilmsController.getOne);
export default routerFilms;