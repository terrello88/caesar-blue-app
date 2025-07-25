import React, { useState } from 'react';

interface ConsentFormProps {
  onConsentGiven: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onConsentGiven }) => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      onConsentGiven();
    } else {
      alert('You must agree before continuing.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Consent Form</h2>
      <p>Please read and agree to our terms before proceeding.</p>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        I agree to the terms and conditions.
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsentForm;
