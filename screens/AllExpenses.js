import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
function AllExpenses() {
  return (
    <>
      <Text>All expenses</Text>
      <ExpensesOutput expensesPeriod="Total" />
    </>
  );
}

export default AllExpenses;

