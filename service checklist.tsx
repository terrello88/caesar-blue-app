import React from 'react';

interface ServiceChecklistProps {
  checklist: {
    vacuum: boolean;
    skimming: boolean;
    brushing: boolean;
    chemicalAdjustment: boolean;
    filterCleaning: boolean;
    pumpCheck: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceChecklist: React.FC<ServiceChecklistProps> = ({ checklist, handleChange }) => {
  return (
    <section>
      <h2>Service Checklist</h2>
      <label>
        <input type="checkbox" name="vacuum" checked={checklist.vacuum} onChange={handleChange} />
        Vacuum
      </label>
      <label>
        <input type="checkbox" name="skimming" checked={checklist.skimming} onChange={handleChange} />
        Skimming
      </label>
      <label>
        <input type="checkbox" name="brushing" checked={checklist.brushing} onChange={handleChange} />
        Brushing
      </label>
      <label>
        <input type="checkbox" name="chemicalAdjustment" checked={checklist.chemicalAdjustment} onChange={handleChange} />
        Chemical Adjustment
      </label>
      <label>
        <input type="checkbox" name="filterCleaning" checked={checklist.filterCleaning} onChange={handleChange} />
        Filter Cleaning
      </label>
      <label>
        <input type="checkbox" name="pumpCheck" checked={checklist.pumpCheck} onChange={handleChange} />
        Pump Check
      </label>
    </section>
  );
};

export default ServiceChecklist;