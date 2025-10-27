import React from 'react';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import Dashboard from './components/Dashboard';
import CategoryForm from './components/CategoryForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">💰 Expense Tracker</h1>
          <p className="text-gray-600 mt-2">Track your income and expenses effortlessly</p>
        </header>
        
        <main className="space-y-6">
          <IncomeForm />
          <CategoryForm />
          <ExpenseForm />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
