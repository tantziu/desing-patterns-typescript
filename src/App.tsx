import React from "react";
import { LoginSimulator } from "./StrategyPattern/LoginSimulator";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello world</p>
      {LoginSimulator.main()}
    </div>
  );
};

export default App;
