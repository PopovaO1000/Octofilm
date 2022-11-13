import {Router} from "express";
import FilmsController from "./FilmsController.js";

const routerFilms = new Router();

routerFilms.get('/output', FilmsController.fetchAll);
export default routerFilms;