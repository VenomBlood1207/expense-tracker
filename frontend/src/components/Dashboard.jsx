import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

export default function Dashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    api.get("/summary/").then(setSummary);
  }, []);

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <p>Total Income: ${summary.total_income}</p>
      <p>Total Expenses: ${summary.total_expenses}</p>
      <p>Remaining: ${summary.remaining}</p>
      <h3 className="mt-4">Category Breakdown</h3>
      <ul>
        {Object.entries(summary.category_breakdown || {}).map(([cat, amount]) => (
          <li key={cat}>{cat}: ${amount}</li>
        ))}
      </ul>
    </div>
  );
}
