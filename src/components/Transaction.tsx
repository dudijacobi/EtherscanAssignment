import { memo } from "react";
import { ITransaction } from "../interfaces/Transaction";
import SectionView from "./SectionView";
import "./transaction.scss";

interface TransactionProps {
  transaction: ITransaction;
}

const Transaction = memo(({ transaction }: TransactionProps) => (
  <li className="transaction">
    <SectionView label="TimeStamp" value={transaction.timeStamp} />
    <SectionView label="From Address" value={transaction.from} />
    <SectionView label="To Address" value={transaction.to} />
    <SectionView label="Value" value={transaction.value} />
    <SectionView label="Confirmations" value={transaction.confirmations} />
    <SectionView label="Hash" value={transaction.hash} />
  </li>
));

export default Transaction;
