import React, { useState } from 'react';
import { api } from '../utils/api';

export default function IncomeForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/income/", { amount: parseFloat(amount) });
    setAmount("");
    alert("Income saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Set Monthly Income</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
