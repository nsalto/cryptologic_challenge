import { Router } from "express";
import { getTransactionDetails } from "../controller/controllers";

const router = Router();

router.get("/detail/:hash", getTransactionDetails);

export default router;
