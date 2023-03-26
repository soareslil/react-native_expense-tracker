import { Text, View, StyleSheet } from 'react-native';
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { GlobalStyles } from "../constants/styles";

function RecentExpenses(){
    return  (
        <View style={styles.container}>
          <Text>Recent expenses</Text>
          <ExpensesOutput expensesPeriod="Last 7 days" />
        </View>
      );
}

export default RecentExpenses;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary400,
  }
})