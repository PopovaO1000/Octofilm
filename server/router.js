import {Router} from "express";
import UserController from "./UserController.js";

const router = new Router();

router.post('/auth', UserController.authUser);
export default router;