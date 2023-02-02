import { useState } from "react";
import "./autoComplete.css";
var data = require("../data/MOCK_DATA.json");

export default function AutoComplete() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="srch">
      {/* <h1>Search</h1> */}

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange}  placeholder="search" className="search"/>
          <button onClick={() => onSearch(value)} className="btn"> Search </button>
        </div>
        <div className="dropdownn">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdownn-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
