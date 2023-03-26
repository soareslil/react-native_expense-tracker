import { FlatList, StyleSheet, Text } from "react-native";

function renderExpenseItem(itemData){
    return (
        <>
        <Text>{itemData.item.description}</Text>
        </>
    )
}

function ExpensesList({ expenses }) {
  return (
    <>
      <FlatList 
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item)=> item.id}
      />
    </>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {},
  container: {},
});
