import SearchPanel from "./SearchPanel.js";
import ResultsPanel from "./ResultsPanel.js";
// import Attribution from "./Attribution.js";

import "./App.css";
import "./SearchPanel.css";
import "./ResultsPanel.css";
// import "./Attribution.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <SearchPanel />
        <ResultsPanel />
      </div>
    </div>
  );
}

/*

      <WeatherPic />
      <InfoPanel />
      <Attribution />

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
