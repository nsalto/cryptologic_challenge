import { Router } from "express";
import {
  getTransactionDetails,
  saveTransaction,
  getDecodeTransaction,
  getAllTransactions,
  getAbiDetail,
} from "../controller/controllers";

const router = Router();

router.get("/detail/:hash", getTransactionDetails);
router
  .post("/transaction", saveTransaction)
  .get("/:hash", getDecodeTransaction);

router.get("/transaction/get-all", getAllTransactions);

router.get("/contract/abi", getAbiDetail);

export default router;
