import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";

//For styling we are using modules. Before we had styles defined in index.css for example: <header className="header">

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
