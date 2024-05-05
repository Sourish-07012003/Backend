import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import {isAdminAutenticated,isPatientAutenticated} from "../middlewares/auth.js";

const router = express.Router();


router.post("/post",isPatientAutenticated,postAppointment);
router.get("/getall",isAdminAutenticated,getAllAppointments);
router.put("/update/:id",isAdminAutenticated,updateAppointmentStatus);
router.delete("/delete/:id",isAdminAutenticated,deleteAppointment);



export default router;