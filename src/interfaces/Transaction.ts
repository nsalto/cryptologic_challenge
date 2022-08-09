import { BigNumber } from "ethers";
export interface Transaction {
    hash: string;
    type: number | null;
    blockNumber: number | null;
    confirmations: number | null;
    from: string;
    gasPrice: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    maxFeePerGas: BigNumber;
    gasLimit: BigNumber;
    to: string;
    nonce: number | null;
    data: string;
    r:string;
    s: string;
    v: number | null;
    chainId: number | null;
}

