export const decodeGas = (transaction: any) => {
    const { gasPrice, maxPriorityFeePerGas, maxFeePerGas, gasLimit, ...debt } =
      transaction;
    const decodeTransaction = {
      gasPrice: parseInt(gasPrice._hex),
      maxPriorityFeePerGas: parseInt(maxPriorityFeePerGas._hex),
      maxFeePerGas: parseInt(maxFeePerGas._hex),
      gasLimit: parseInt(gasLimit._hex),
      ...debt,
    };
  
    return decodeTransaction;
  };