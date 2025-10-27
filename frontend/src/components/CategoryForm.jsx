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
      alert("Category created!");
    } catch (error) {
      alert("Error creating category");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mb-6 p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Add Category</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category name"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Category
        </button>
      </form>
      
      <div>
        <h3 className="font-medium mb-2">Existing Categories:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span 
              key={cat.id} 
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {cat.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
