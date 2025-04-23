import React from "react";
import BgChanger from "./bgChanger/BgChanger";
import PasswordGenerator from "./passwordGenerator/PasswordGenerator";
import CurrencyConverter from "./currencyConverter/CurrencyConverter";

const Projects = () => {
  return (
    <div>
      <BgChanger />
      <br />
      <PasswordGenerator />
      <br />
      <CurrencyConverter />
    </div>
  );
};

export default Projects;
