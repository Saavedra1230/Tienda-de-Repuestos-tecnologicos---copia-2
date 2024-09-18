import express from "express";
import Register_P from "../Controllers/Register_P_Controllers";
import RegisterValidator from '../Middleware/Register_P_Validadors';
import Delete_P from "../Controllers/Delete_P_Controllers";
import Update_P from "../Controllers/Update_P_Controllers";
import Consult_P from "../Controllers/Consult_P_Controllers";
import Update_P_Validadors from "../Middleware/Update_P_Validadors";
import Delete_P_Validadors from "../Middleware/Delete_P_Validadors";
import Delete_Product from "../Controllers/Delete_P_Controllers";


const router = express.Router();

router.post('/', RegisterValidator.validatorParams, RegisterValidator.validator, Register_P);
router.put('/:id', Update_P_Validadors.Update_P_validatorParams, Update_P_Validadors.validator, Update_P);
router.delete('/:id',Delete_P_Validadors.Delete_P_validatorParams, Delete_P_Validadors.validator, Delete_P);
router.get('/', Consult_P)

export default router;