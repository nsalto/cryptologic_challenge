import { Request, Response } from "express";
import { provider } from "../config/rpc_connection";
import { getContractData } from "./contract_data";
import { collections } from "../config/database";
import { decodeGas } from "../utils/gasDecode";
import { Error } from "../utils/Error";

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

export const saveTransaction = async (req: Request, res: Response) => {
  const txHash: string = req.body.hash;
  try {
    const transaction = await provider.getTransaction(txHash);
    const result = await collections.transaction_data?.insertOne(transaction);

    return res.status(201).send({
      status: 201,
      data: transaction,
      detail: `Transaction saved successfully, Id: ${result?.insertedId}`,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const getDecodeTransaction = async (req: Request, res: Response) => {
  const hash = req.params.hash;
  try {
    const result = await collections.transaction_data?.findOne({ hash });
    if (!result) Error.badRequest(`Could not find transaction`);

    const decodeTransaction = decodeGas(result);

    return res.status(200).send({
      status: 200,
      data: decodeTransaction,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const result = await collections.transaction_data?.find().toArray();
    if (!result) return Error.badRequest(`Could not find transactions`);

    const decodeArrayOfTrans = result.map((o) => decodeGas(o));

    return res.status(200).send({
      status: 200,
      data: decodeArrayOfTrans,
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const getAbiDetail = async (req: Request, res: Response) => {
    try {
        const abi = await collections.abi?.find().toArray();
        if (!abi) return Error.badRequest(`Could not find abi json`);
    
        return res.status(200).send({
          status: 200,
          data: abi,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
}