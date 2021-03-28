import axios from "axios";

const apiKeyToken = "RHC868JWGXKIZK1GDJ2PUIS6B8NU8S1ICM";

export const getTransactionsByAddress = async (address: string) => {
  const response = await axios.get(
    `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKeyToken}`
  );
  return response.data;
};
