import React, { useState } from 'react';

interface CustomerData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerForm: React.FC<{ onSubmit: (data: CustomerData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded bg-white shadow-md space-y-4">
      <h2 className="text-xl font-bold text-blue-700">Customer Info</h2>
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="address"
        type="text"
        placeholder="Service Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Customer
      </button>
    </form>
  );
};

export default CustomerForm;
