import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform payment processing logic here
    // You can make API calls or integrate with a payment gateway

    // Reset form fields after submission
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expiry">Expiry Date:</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;