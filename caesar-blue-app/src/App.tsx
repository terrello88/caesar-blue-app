import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AuthForm from "./components/AuthForm";
import ConsentForm from "./components/ConsentForm";
import CustomerForm from "./CustomerForm";
import ServiceChecklist from "./ServiceChecklist";
import WaterTestForm from "./WaterTestForm";
import ChemicalCalculator from "./ChemicalCalculator";
import InvoiceForm from "./InvoiceForm";
import SignaturePad from "./SignaturePad";
import "./App.css";

function App() {
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

  const handleCustomerSubmit = (data: any) => {
    console.log("Customer submitted:", data);
    // Save to Firebase or process here
  };

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h1 style={{ color: "#0077cc" }}>Caesar Blue Pools Dashboard</h1>
        <button onClick={handleLogout} style={{ backgroundColor: "#e3342f", color: "white", padding: "0.5rem 1rem", borderRadius: "5px" }}>
          Logout
        </button>
      </div>

      <ConsentForm />
      <CustomerForm onSubmit={handleCustomerSubmit} />
      <ServiceChecklist />
      <WaterTestForm />
      <ChemicalCalculator />
      <InvoiceForm />
      <SignaturePad />
    </div>
  );
}

export default App;