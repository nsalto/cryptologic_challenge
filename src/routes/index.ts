import { Router } from "express";
import {
  getTransactionDetails,
  saveTransaction,
  getDecodeTransaction,
  getAllTransactions,
  getAbiDetail,
} from "../controller/controllers";
import { isValidHash } from "../middleware/isValidHash";

const router = Router();

router.get("/detail/:txHash", isValidHash,getTransactionDetails);
router
  .post("/transaction", saveTransaction)
  .get("/:txHash", getDecodeTransaction);

router.get("/transaction/get-all", getAllTransactions);

router.get("/contract", getAbiDetail);

export default router;
