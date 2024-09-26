import { Router, Request, Response } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import { register } from "module";




const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);




export { router };
