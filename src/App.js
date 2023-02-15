import WeatherPic from "./WeatherPic.js";
import InfoPanel from "./InfoPanel.js";
import Attribution from "./Attribution.js";

import "./App.css";
import "./WeatherPic.css";
import "./InfoPanel.css";
import "./Attribution.css";

export default function App() {
  return (
    <div className="App">
      Test
      <WeatherPic />
      <InfoPanel />
      <Attribution />
    </div>
  );
}

/*

import "./App.css";

export default App;

function App() {
  return (
    <div className="App">
      <div className="main-container"></div>
    </div>
  );
}
*/
