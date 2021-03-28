import { ChangeEvent, useMemo, useState } from "react";
import { debounce } from "throttle-debounce";
import Web3Utils from "web3-utils";
import Transactions from "./components/Transactions";
import { ITransaction } from "./interfaces/Transaction";
import { getTransactionsByAddress } from "./services/Services";
import "./app.scss";
import classNames from "classnames";

const App = () => {
  const [value, setValue] = useState("");
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationError, setValidationError] = useState(false);

  function onChange(str: string) {
    return getTransactionsByAddress(str)
      .then((response) => setTransactions(response?.result || []))
      .catch((error) => setErrorMessage(error.message));
  }

  const debounceOnChange = useMemo(() => debounce(400, onChange), []);

  function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    setValue(targetValue);

    if (!targetValue) {
      setErrorMessage("");
      setValidationError(false);
      setTransactions([]);
      return;
    }

    const isValidAddress = Web3Utils.isAddress(targetValue);
    if (!isValidAddress) {
      setValidationError(true);
      setTransactions([]);
      return;
    }

    setValidationError(false);
    debounceOnChange(targetValue);
  }

  return (
    <div className="app">
      <div className="content">
        <h1 className="title">Etherscan</h1>
        <input
          className={classNames("input", { "not-valid": !!validationError })}
          value={value}
          onChange={onChangeValue}
        />
        {transactions.length > 0 && (
          <Transactions transactions={transactions} />
        )}
        {validationError && (
          <span className="validation-error">Not a valid address..</span>
        )}
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default App;
