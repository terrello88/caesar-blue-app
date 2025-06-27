import React, { useState } from 'react';

interface InvoiceFormProps {
  gallons: number;
}

const basePrices = {
  cleaning: 75,
  algaeTreatment: 60,
  filterClean: 40,
  shock: 25,
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({ gallons }) => {
  const [selected, setSelected] = useState({
    cleaning: false,
    algaeTreatment: false,
    filterClean: false,
    shock: false,
  });

  const toggleService = (name: keyof typeof selected) => {
    setSelected({ ...selected, [name]: !selected[name] });
  };

  const calculateTotal = () => {
    let total = 0;
    Object.entries(selected).forEach(([key, val]) => {
      if (val) {
        const price = basePrices[key as keyof typeof basePrices];
        const multiplier = gallons > 20000 ? 1.5 : 1;
        total += price * multiplier;
      }
    });
    return total;
  };

  return (
    <section>
      <h2>Generate Invoice</h2>
      {Object.entries(basePrices).map(([service, price]) => (
        <label key={service}>
          <input
            type="checkbox"
            checked={selected[service as keyof typeof selected]}
            onChange={() => toggleService(service as keyof typeof selected)}
          />
          {service} — ${price}
        </label>
      ))}
      <p><strong>Total:</strong> ${calculateTotal().toFixed(2)}</p>
    </section>
  );
};

export default InvoiceForm;