import React from "react";

const App = ({ label, onChange }) => {
  const currencies = ["EUR", "CHF", "GBP", "USD"];

  return (
    <div className="col s6">
      <label>{label}</label>
      <select
        className="browser-default"
        name="outputDevises"
        id="outputDevises"
        onChange={onChange}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default App;
