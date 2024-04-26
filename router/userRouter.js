import express from "express";
import {addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister} from "../controller/userController.js";
import { isAdminAutenticated,isPatientAutenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew",isAdminAutenticated,addNewAdmin);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAutenticated,getUserDetails);
router.get("/patient/me",isPatientAutenticated,getUserDetails);
router.get("/admin/logout",isAdminAutenticated,logoutAdmin);
router.get("/patient/logout",isPatientAutenticated,logoutPatient);
router.post("/doctor/addnew",isAdminAutenticated,addNewDoctor);
export default router;