import React from "react";
import CustomerForm from "./CustomerForm";
import ServiceChecklist from "./ServiceChecklist";
import WaterTestForm from "./WaterTestForm";
import ChemicalCalculator from "./ChemicalCalculator";
import InvoiceForm from "./InvoiceForm";
import SignaturePad from "./SignaturePad";
import AuthForm from "./components/AuthForm";
import ConsentForm from "./components/ConsentForm";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#0077cc" }}>Caesar Blue Pools Dashboard</h1>
      <AuthForm />
      <CustomerForm />
      <ConsentForm />
      <ServiceChecklist />
      <WaterTestForm />
      <ChemicalCalculator />
      <InvoiceForm />
      <SignaturePad />
    </div>
  );
}

export default App;
