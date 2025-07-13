import React, { useState } from 'react';
import AuthForm from './AuthForm';
import CustomerForm from './CustomerForm';
import WaterTestForm from './WaterTestForm';
import ServiceChecklist from './ServiceChecklist';
import InvoiceForm from './InvoiceForm';
import ChemicalCalculator from './ChemicalCalculator';

import { db, auth } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    poolType: 'chlorine',
    gallons: '',
    pump: '',
    filter: ''
  });

  const [testData, setTestData] = useState({
    freeChlorine: '',
    totalChlorine: '',
    pH: '',
    alkalinity: '',
    calciumHardness: '',
    cya: '',
    salinityOrTDS: '',
    temperature: ''
  });

  const [checklist, setChecklist] = useState({
    vacuum: false,
    skimming: false,
    brushing: false,
    chemicalAdjustment: false,
    filterCleaning: false,
    pumpCheck: false
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestData({ ...testData, [e.target.name]: e.target.value });
  };

  const handleChecklistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecklist({ ...checklist, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      alert('Please log in to save data.');
      return;
    }

    try {
      await addDoc(collection(db, 'visits'), {
        userEmail: user.email,
        createdAt: Timestamp.now(),
        customer: formData,
        waterTest: testData,
        checklist: checklist
      });
      alert('Visit saved to Firestore ✅');
    } catch (error) {
      console.error('Error saving visit:', error);
      alert('Failed to save. Try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#0077cc' }}>Caesar Blue Pools</h1>

      <AuthForm />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <CustomerForm formData={formData} handleChange={handleProfileChange} />
        <WaterTestForm poolType={formData.poolType} testData={testData} handleChange={handleTestChange} />
        <ServiceChecklist checklist={checklist} handleChange={handleChecklistChange} />
        <InvoiceForm gallons={parseInt(formData.gallons || '0')} />
        <ChemicalCalculator gallons={parseInt(formData.gallons || '0')} testData={testData} />
        <button type="submit" style={{ padding: '1rem', backgroundColor: '#0077cc', color: 'white', border: 'none', borderRadius: '5px' }}>
          Save Visit Info
        </button>
      </form>
    </div>
  );
}

export default App;