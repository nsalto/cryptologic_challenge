import { Request, Response } from "express";
import { provider } from "../config/rpc_connection";
import { getContractData } from "./contract_data";

export const getTransactionDetails = async (req: Request, res: Response) => {
  const txHash: string = req.params.hash;
  try {
    const transaction = await provider.getTransaction(txHash);
    const { data } = transaction;
    const contract_address: string = `0x${data.substring(data.length - 40)}`;
    const contract = await getContractData(contract_address);
    return res.status(200).send({
      status: 200,
      transaction,
      contract_detail: contract,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};