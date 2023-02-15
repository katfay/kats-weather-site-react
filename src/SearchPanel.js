import Search from "./Search.js";
import GeoInfo from "./GeoInfo.js";

import "./SearchPanel.css";

export default function SearchPanel() {
  return (
    <div className="SearchPanel">
      <div>
        <Search />
      </div>
      <div>
        <GeoInfo />
      </div>
    </div>
  );
}
