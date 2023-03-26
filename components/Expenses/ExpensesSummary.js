import { View, Text, StyleSheet, FlatList } from "react-native";

function ExpensesSummary({ expenses, periodName }) {

    const expensesSum = expenses.reduce((sum, expense)=> {
       return sum + expense.amount 
    }, 0);


  return (
    <>
      <View>
        <Text>{periodName}</Text>
        <Text>${expensesSum.toFixed(2)}</Text>
      </View>
      <FlatList />
    </>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {},
  container: {},
  container: {},
});
