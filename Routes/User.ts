import express from "express";
import Register_Controller from '../Controllers/Register_U_Controllers';
import Register_Validator from '../Middleware/Register_U_Validators';
import Auth from "../Controllers/Auth_Controllers";
import Auth_validadors from "../Middleware/Auth_validadors";
import verifyToken from "../Middleware/Verify_Token_Validadors";
import profile from "../Controllers/Profile_Controllers";

const router = express.Router();


router.post('/Register', Register_Validator.validatorParams, Register_Validator.validator, Register_Controller);
router.post('/', Auth_validadors.validatorParams, Auth_validadors.validator, Auth);
router.get('/', verifyToken, profile);


export default router;