import React, { useState } from "react";

const WaterTestForm = () => {
  const [testResults, setTestResults] = useState({
    pH: "",
    chlorine: "",
    alkalinity: "",
    calciumHardness: "",
    cyanuricAcid: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestResults({
      ...testResults,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Water test results submitted!");
    // Here you can add code to save or process the results
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Water Test Form</h2>
      <label>
        pH:
        <input
          type="number"
          step="0.01"
          name="pH"
          value={testResults.pH}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Chlorine (ppm):
        <input
          type="number"
          step="0.01"
          name="chlorine"
          value={testResults.chlorine}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Alkalinity (ppm):
        <input
          type="number"
          step="0.01"
          name="alkalinity"
          value={testResults.alkalinity}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Calcium Hardness (ppm):
        <input
          type="number"
          step="0.01"
          name="calciumHardness"
          value={testResults.calciumHardness}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Cyanuric Acid (ppm):
        <input
          type="number"
          step="0.01"
          name="cyanuricAcid"
          value={testResults.cyanuricAcid}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Test Results</button>
    </form>
  );
};

export default WaterTestForm;
