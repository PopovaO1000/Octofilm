import {Router} from "express";
import BookingController from './BookingController.js';

const routerBooking = new Router();

routerBooking.get('/output', BookingController.getOne);
routerBooking.get('/getbookings', BookingController.getUserBookings);
routerBooking.get('/deletebookings', BookingController.deleteBooking);
routerBooking.post('/insert', BookingController.insert);
export default routerBooking;