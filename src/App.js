import { useState } from "react";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Table from "./components/Table/Table.js";

function App(props) {
  const [results, setResults] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false); // Track if calculation has been performed
  let currentSavings = null;

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results
    currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
    setResults(yearlyData);
    setIsCalculated(true); // Set isCalculated to true when calculation is performed
  };

  const resetHandler = () => {
    setResults(null);
    setIsCalculated(false); // Set isCalculated to false when reset is clicked
  };

  return (
    <div>
      <Header></Header>
      <Form onCalculate={calculateHandler} onReset={resetHandler}></Form>
      {!results ? (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      ) : (
        <Table data={results} currentSavings={currentSavings}></Table>
      )}
    </div>
  );
}

export default App;
