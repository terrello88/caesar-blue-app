// src/App.tsx

import React, { useState } from "react";
import ConsentForm from "./components/ConsentForm";
import CustomerForm from "./CustomerForm";
import ServiceChecklist from "./ServiceChecklist";
import WaterTestForm from "./WaterTestForm";
import ChemicalCalculator from "./ChemicalCalculator";
import InvoiceForm from "./InvoiceForm";
import SignaturePad from "./SignaturePad";
import AuthForm from "./components/AuthForm";
import "./App.css";

function App() {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsentGiven = () => {
    setConsentGiven(true);
    console.log("Consent has been given!");
  };

  const handleCustomerSubmit = (data: any) => {
    console.log("Customer submitted:", data);
    // Save data or process here
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#0077cc" }}>Caesar Blue Pools Dashboard</h1>
      <AuthForm />

      {/* Show ConsentForm only if consent NOT given */}
      {!consentGiven ? (
        <ConsentForm onConsentGiven={handleConsentGiven} />
      ) : (
        <>
          <CustomerForm onSubmit={handleCustomerSubmit} />
          <ServiceChecklist />
          <WaterTestForm />
          <ChemicalCalculator />
          <InvoiceForm />
          <SignaturePad />
        </>
      )}
    </div>
  );
}

export default App;