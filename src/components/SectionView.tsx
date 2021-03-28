import { memo } from "react";
import classNames from "classnames";
import "./section-view.scss";

interface TransactionProps {
  label: string;
  value: string;
  className?: string;
}

const SectionView = memo(({ label, value, className }: TransactionProps) => (
  <section className={classNames("section-view", className)}>
    <label>{`${label}:`}</label>
    <span>{value}</span>
  </section>
));

export default SectionView;
