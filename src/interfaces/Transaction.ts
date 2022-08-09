export interface Transaction {
    hash: string;
    type: number | null;
    blockNumber: number | null;
    confirmations: number | null;
    from: string;
    gasPrice: object;
    maxPriorityFeePerGas: object;
    maxFeePerGas: object;
    gasLimit: object;
    to: string;
    nonce: number | null;
    data: string;
    r:string;
    s: string;
    v: number | null;
    chainId: number | null;
}

