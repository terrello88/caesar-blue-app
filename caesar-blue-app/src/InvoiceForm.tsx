import React, { useState } from "react";

const InvoiceForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [showCopy, setShowCopy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !serviceDescription || !amount) {
      alert("Please fill all fields");
      return;
    }
    setShowCopy(true);
  };

  return (
    <div>
      <h2>Invoice Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer full name"
          />
        </label>
        <br />
        <label>
          Service Description:
          <textarea
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            placeholder="Describe the services provided"
          />
        </label>
        <br />
        <label>
          Amount ($):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Total cost"
          />
        </label>
        <br />
        <button type="submit">Generate Invoice</button>
      </form>

      {showCopy && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <img
            src="/logo192.png"
            alt="Caesar Blue Pools Logo"
            style={{ width: "150px" }}
          />
          <h3>Invoice for {customerName}</h3>
          <p>Services: {serviceDescription}</p>
          <p>Total Amount: ${amount}</p>
          <p>Thank you for choosing Caesar Blue Pools!</p>
          <p>(Customer Copy)</p>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;
