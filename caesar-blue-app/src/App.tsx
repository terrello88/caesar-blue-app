import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './components/firebase';

import AuthForm from './components/AuthForm';
import CustomerForm from './components/CustomerForm';
import ServiceChecklist from './components/ServiceChecklist';
import WaterTestForm from './components/WaterTestForm';
import ChemicalCalculator from './components/ChemicalCalculator';
import InvoiceForm from './components/InvoiceForm';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="p-4 space-y-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-blue-600">Caesar Blue Pools Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <CustomerForm />
      <ServiceChecklist />
      <WaterTestForm />
      <ChemicalCalculator />
      <InvoiceForm />
    </div>
  );
};

export default App;