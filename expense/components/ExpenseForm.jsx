import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseText, setExpenseText] = useState('');
  const [category, setCategory] = useState('fuel');
  const [isEssential, setIsEssential] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      text: expenseText,
      category,
      isEssential,
      date: new Date().toLocaleDateString(),
    };
    onAddExpense(newExpense);
    setExpenseText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Expense:  
        <input
          type="text"
          value={expenseText}
          onChange={(e) => setExpenseText(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="fuel">Fuel</option>
          <option value="food">Food</option>
          <option value="bus">Bus</option>
          <option value="cats">Cats</option>
          <option value="house">House</option>
          <option value="bike">Bike</option> 
          {/* Add more categories as needed */}
        </select>
      </label>
      <label>
        Essential:
        <select value={isEssential} onChange={(e) => setIsEssential(e.target.value === 'true')}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
