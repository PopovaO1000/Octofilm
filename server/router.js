import {Router} from "express";
import UserController from "./UserController.js";

const router = new Router();

router.post('/auth', UserController.authUser);
router.post('/reg', UserController.regUser);
router.post('/update', UserController.updateUser);
router.post('/updatePass', UserController.updateUserPass);
export default router;