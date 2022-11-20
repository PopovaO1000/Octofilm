import {Router} from "express";
import ScheduleController from "./ScheduleController.js";

const routerSchedule = new Router();

routerSchedule.get('/output', ScheduleController.fetchAll);
export default routerSchedule;