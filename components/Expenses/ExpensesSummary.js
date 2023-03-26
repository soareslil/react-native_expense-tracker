import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses }) {
  return (
    <>
      <View>
        <Text>Period</Text>
        <Text>$100,00</Text>
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
