import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

import { GlobalStyles } from "../constants/styles";

function AllExpenses() {
  return (
    <View style={styles.container}>
      <Text>All expenses</Text>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary400,
  }
})
