import express from "express";
import Register_Controller from '../Controllers/Register_U_Controllers';
import Register_Validator from '../Middleware/Register_U_Validators';
import Login_U_Validadors from "../Middleware/Login_U_Validadors";
/* import Login from "../Controllers/Login_U_Controllers"; */

const router = express.Router();


router.post('/Register', Register_Validator.validatorParams, Register_Validator.validator, Register_Controller);
router.post('/Login', Login_U_Validadors.Login_U_Params, Login_U_Validadors.validator, /* Login */ )


export default router;