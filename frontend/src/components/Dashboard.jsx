import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

export default function Dashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    api.get("/summary/").then(setSummary);
  }, []);

  return (
    <div className="mt-6 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">📊 Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-medium text-blue-800">Total Income</h3>
          <p className="text-2xl font-bold text-blue-600">${summary.total_income || 0}</p>
        </div>
        <div className="bg-red-50 p-4 rounded">
          <h3 className="font-medium text-red-800">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600">${summary.total_expenses || 0}</p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h3 className="font-medium text-green-800">Remaining</h3>
          <p className="text-2xl font-bold text-green-600">${summary.remaining || 0}</p>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">🏷️ Category Breakdown</h3>
        {summary.category_breakdown && Object.keys(summary.category_breakdown).length > 0 ? (
          <div className="space-y-2">
            {Object.entries(summary.category_breakdown).map(([category, amount]) => (
              <div key={category} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="font-medium">{category}</span>
                <span className="font-bold">${amount}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No expenses recorded yet</p>
        )}
      </div>
    </div>
  );
}
