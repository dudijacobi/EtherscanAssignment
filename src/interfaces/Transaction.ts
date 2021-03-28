export interface ITransaction {
  timeStamp: string;
  from: string; // From address
  to: string; // To Address
  value: string;
  confirmations: string;
  hash: string;
}
