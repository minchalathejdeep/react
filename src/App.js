import Expenses from './components/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'mobile',

      amount: 2000,
      date: new Date(2020, 2, 14),
    },
    { id: 'e2', 
    title: 'New TV',
   
     amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car',
      amount: 500000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'bike',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
    <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;