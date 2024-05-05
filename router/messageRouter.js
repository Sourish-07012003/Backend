import express from "express";
// import { sendMessage } from " ../controller/messageController.js";

import {getAllMessages, sendMessage} from "../controller/messageController.js";
import {isAdminAutenticated} from "../middlewares/auth.js"
const router = express.Router();
router.post("/send",sendMessage);
router.get("/getall",isAdminAutenticated,getAllMessages);

export default router;


