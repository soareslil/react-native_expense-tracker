import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 120.0,
    date: new Date("2023-04-01"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 290.0,
    date: new Date("2023-03-31"),
  },
  {
    id: "e3",
    description: "t-shirt",
    amount: 30.0,
    date: new Date("22023-04-02"),
  },
  {
    id: "e4",
    description: "a book",
    amount: 20.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e5",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e6",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e7",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e8",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e9",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
  {
    id: "e10",
    description: "a book",
    amount: 320.0,
    date: new Date("2021-10-29"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
