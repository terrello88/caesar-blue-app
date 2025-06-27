import React from 'react';

interface ChemicalCalculatorProps {
  gallons: number;
  testData: {
    pH: string;
    freeChlorine: string;
    alkalinity: string;
    cya: string;
  };
}

const ChemicalCalculator: React.FC<ChemicalCalculatorProps> = ({ gallons, testData }) => {
  const g = gallons || 0;

  const toNum = (val: string) => parseFloat(val) || 0;

  const recommendChlorine = () => {
    const fc = toNum(testData.freeChlorine);
    return fc < 2 ? ((2 - fc) * g * 0.00013).toFixed(2) + ' lbs of shock' : 'OK';
  };

  const recommendpH = () => {
    const pH = toNum(testData.pH);
    if (pH < 7.2) return ((7.2 - pH) * g * 0.0008).toFixed(2) + ' oz soda ash';
    if (pH > 7.6) return ((pH - 7.6) * g * 0.0012).toFixed(2) + ' oz muriatic acid';
    return 'OK';
  };

  const recommendAlkalinity = () => {
    const alk = toNum(testData.alkalinity);
    return alk < 80 ? ((80 - alk) * g * 0.0008).toFixed(2) + ' oz baking soda' : 'OK';
  };

  const recommendCYA = () => {
    const cya = toNum(testData.cya);
    return cya < 30 ? ((30 - cya) * g * 0.00013).toFixed(2) + ' oz stabilizer' : 'OK';
  };

  return (
    <section>
      <h2>Chemical Dose Calculator</h2>
      <ul>
        <li><strong>Chlorine:</strong> {recommendChlorine()}</li>
        <li><strong>pH:</strong> {recommendpH()}</li>
        <li><strong>Alkalinity:</strong> {recommendAlkalinity()}</li>
        <li><strong>CYA:</strong> {recommendCYA()}</li>
      </ul>
    </section>
  );
};

export default ChemicalCalculator;