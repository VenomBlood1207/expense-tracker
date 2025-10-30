import React, { useState } from 'react';
import { api } from '../utils/api';

export default function IncomeForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/income/", { amount: parseFloat(amount) });
      setAmount("");
      alert("Income saved successfully!");
    } catch (error) {
      alert("Error saving income: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-white">
      <h2 className="text-xl font-semibold mb-4">💰 Set Monthly Income</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter monthly income"
          className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium transition"
        >
          Save Income
        </button>
      </div>
    </form>
  );
}
