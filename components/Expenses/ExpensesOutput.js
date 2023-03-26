import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 120.0,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 290.0,
    date: new Date("2021-11-19"),
  },
  {
    id: "e3",
    description: "t-shirt",
    amount: 30.0,
    date: new Date("2021-12-09"),
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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary
          expenses={DUMMY_EXPENSES}
          periodName={expensesPeriod}
        />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.accent500
  },

});
