import React from 'react';

interface CustomerFormProps {
  formData: {
    name: string;
    address: string;
    email: string;
    phone: string;
    poolType: string;
    gallons: string;
    pump: string;
    filter: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ formData, handleChange }) => {
  return (
    <section>
      <h2>Create Customer Profile</h2>
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <select name="poolType" value={formData.poolType} onChange={handleChange}>
        <option value="chlorine">Chlorine Pool</option>
        <option value="salt">Saltwater Pool</option>
      </select>
      <input type="number" name="gallons" placeholder="Pool Gallons" value={formData.gallons} onChange={handleChange} />
      <input type="text" name="pump" placeholder="Pump Model" value={formData.pump} onChange={handleChange} />
      <input type="text" name="filter" placeholder="Filter Type" value={formData.filter} onChange={handleChange} />
    </section>
  );
};

export default CustomerForm;
