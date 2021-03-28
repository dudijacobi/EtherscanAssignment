import { memo } from "react";
import { ITransaction } from "../interfaces/Transaction";
import Transaction from "./Transaction";
import "./transactions.scss";

interface TransactionsListProps {
  transactions: ITransaction[];
}

const Transactions = memo(({ transactions }: TransactionsListProps) => (
  <div className="transactions">
    <ul className="list">
      {transactions.map((transaction) => (
        <Transaction key={transaction.hash} transaction={transaction} />
      ))}
    </ul>
  </div>
));

export default Transactions;
