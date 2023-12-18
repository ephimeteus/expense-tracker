const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map((expense) => (
      <li key={expense.date}>
        {expense.date} - {expense.text} - {expense.category} - {expense.isEssential ? 'Essential' : 'Not Essential'}
      </li>
    ))}
  </ul>
);

export default ExpenseList;
