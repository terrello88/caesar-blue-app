import React, { useState } from "react";

const ChemicalCalculator = () => {
  const [poolVolume, setPoolVolume] = useState("");
  const [chemicalAmount, setChemicalAmount] = useState<number | null>(null);

  const handleCalculate = () => {
    const volume = parseFloat(poolVolume);
    if (!isNaN(volume)) {
      // Simple example: calculate amount of chlorine needed per 1000 gallons
      const amount = volume * 0.0005; // change multiplier as needed
      setChemicalAmount(amount);
    } else {
      alert("Please enter a valid number for pool volume.");
    }
  };

  return (
    <div>
      <h2>Chemical Calculator</h2>
      <label>
        Pool Volume (gallons):
        <input
          type="number"
          value={poolVolume}
          onChange={(e) => setPoolVolume(e.target.value)}
          placeholder="Enter pool volume"
        />
      </label>
      <button onClick={handleCalculate}>Calculate</button>
      {chemicalAmount !== null && (
        <p>Recommended chlorine amount: {chemicalAmount.toFixed(2)} lbs</p>
      )}
    </div>
  );
};

export default ChemicalCalculator;
