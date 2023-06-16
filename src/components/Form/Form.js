import React, { useState } from "react";

const Form = (props) => {
  //WAY 1 - USING SINGLE useStates for Each

  /*
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [duration, setDuration] = useState(10);
  */

  //WAY 1 - USING SEPARATE onChange
  /*
const currentSavingsChangeHandler = (event) => {
  setCurrentSavings(event.target.value);
};

const yearlyContributionChangeHandler = (event) => {
  setYearlyContribution(event.target.value);
};

const expectedReturnChangeHandler = (event) => {
  setExpectedReturn(event.target.value);
};

const durationChangeHandler = (event) => {
  setDuration(event.target.value);
};
*/

  //WAY 2 - USING A GENERIC FUNCTION FOR onChange
  /*
    const listenOnChange = (identifier, value) => {
    if (identifier === "current-savings") {
      setCurrentSavings(value);
    } else if (identifier === "yearly-contribution") {
      setYearlyContribution(value);
    } else if (identifier === "expected-return") {
      setExpectedReturn(value);
    } else {
      setDuration(value);
    }
  };
  */

  //WAY 2 - USING 1 useSTATE FOR ALL
  const [userInput, setUserInput] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  });

  const listenOnChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  //FUNCTION CALCULATE
  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);

    reset();
  };

  //FUNCTION RESET

  //WAY 1
  // const reset = () => {
  //   setCurrentSavings("");
  //   setYearlyContribution("");
  //   setExpectedReturn("");
  //   setDuration("");
  // };

  //WAY 2
  const reset = () => {
    setUserInput({
      "current-savings": 10000,
      "yearly-contribution": 1200,
      "expected-return": 7,
      duration: 10,
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            // value={currentSavings}
            // onChange={currentSavingsChangeHandler}
            onChange={(event) =>
              listenOnChange("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            // value={yearlyContribution}
            // onChange={yearlyContributionChangeHandler}
            onChange={(event) =>
              listenOnChange("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            // value={expectedReturn}
            // onChange={expectedReturnChangeHandler}
            onChange={(event) =>
              listenOnChange("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            // value={duration}
            // onChange={durationChangeHandler}
            onChange={(event) => listenOnChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
