import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

export default function CategoryForm() {
  const [name, setName] = useState("");
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
      await api.post("/categories/", { name });
      setName("");
      fetchCategories();
      alert("Category created successfully!");
    } catch (error) {
      alert("Error creating category: " + error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mb-6 p-4 border rounded bg-white">
      <h2 className="text-xl font-semibold mb-4">🏷️ Add Category</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category name"
            className="flex-1 border p-3 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium transition"
          >
            Add Category
          </button>
        </div>
      </form>
      
      <div>
        <h3 className="font-medium mb-2">Existing Categories:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <span 
                key={cat.id} 
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {cat.name}
              </span>
            ))
          ) : (
            <p className="text-gray-500 italic">No categories created yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
