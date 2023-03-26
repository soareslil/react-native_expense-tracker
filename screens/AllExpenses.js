import { Text, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";



function AllExpenses() {
  return (
    <View>
      <Text>All expenses</Text>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
}

export default AllExpenses;


