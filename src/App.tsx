import React from "react";
import { WeatherStation } from "./ObserverPattern/WeatherStation";
import { LoginSimulator } from "./StrategyPattern/LoginSimulator";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello world</p>
      {/* {LoginSimulator.main()} */}
      {WeatherStation.main()}
    </div>
  );
};

export default App;
