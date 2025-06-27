import React from 'react';

interface WaterTestFormProps {
  poolType: string;
  testData: {
    freeChlorine: string;
    totalChlorine: string;
    pH: string;
    alkalinity: string;
    calciumHardness: string;
    cya: string;
    salinityOrTDS: string;
    temperature: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WaterTestForm: React.FC<WaterTestFormProps> = ({ poolType, testData, handleChange }) => {
  const label = poolType === 'salt' ? 'Salinity (ppm)' : 'TDS (ppm)';

  return (
    <section>
      <h2>Water Test Readings</h2>
      <input type="number" step="0.1" name="freeChlorine" placeholder="Free Chlorine (ppm)" value={testData.freeChlorine} onChange={handleChange} />
      <input type="number" step="0.1" name="totalChlorine" placeholder="Total Chlorine (ppm)" value={testData.totalChlorine} onChange={handleChange} />
      <input type="number" step="0.1" name="pH" placeholder="pH" value={testData.pH} onChange={handleChange} />
      <input type="number" step="1" name="alkalinity" placeholder="Alkalinity (ppm)" value={testData.alkalinity} onChange={handleChange} />
      <input type="number" step="1" name="calciumHardness" placeholder="Calcium Hardness (ppm)" value={testData.calciumHardness} onChange={handleChange} />
      <input type="number" step="1" name="cya" placeholder="CYA (ppm)" value={testData.cya} onChange={handleChange} />
      <input type="number" step="1" name="salinityOrTDS" placeholder={label} value={testData.salinityOrTDS} onChange={handleChange} />
      <input type="number" step="1" name="temperature" placeholder="Temperature (°F)" value={testData.temperature} onChange={handleChange} />
    </section>
  );
};

export default WaterTestForm;