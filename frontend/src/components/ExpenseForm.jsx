import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

export default function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await api.get("/categories/");
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/expenses/", {
        amount: parseFloat(amount),
        description,
        category_id: parseInt(categoryId)
      });
      setAmount("");
      setDescription("");
      setCategoryId("");
      alert("Expense added!");
    } catch (error) {
      alert("Error adding expense");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Add Expense</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="What was this for?"
          />
        </div>
      </div>
      
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
      >
        Add Expense
      </button>
    </form>
  );
}
