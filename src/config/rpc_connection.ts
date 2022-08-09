import { ethers } from "ethers";
import { config } from "./environment";

export const provider = new ethers.providers.JsonRpcProvider(config.RPC);