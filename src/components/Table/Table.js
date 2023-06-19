import classes from "./Table.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  const INITIAL_INVESTMENT = props.currentSavings;

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((element) => {
          return (
            <tr key={element.year}>
              <td>{element.year}</td>
              <td>{formatter.format(element.savingsEndOfYear)}</td>
              <td>{formatter.format(element.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  element.savingsEndOfYear -
                    INITIAL_INVESTMENT -
                    element.yearlyContribution * element.year
                )}
              </td>
              <td>
                {formatter.format(
                  INITIAL_INVESTMENT + element.yearlyContribution * element.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
