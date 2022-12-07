import {Router} from "express";
import BookingController from './BookingController.js';

const routerBooking = new Router();

routerBooking.get('/output', BookingController.getOne);
export default routerBooking;