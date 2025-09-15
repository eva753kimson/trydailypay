import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense Added: ${expense}`);
    setExpense('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
