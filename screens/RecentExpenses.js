import { Text, View } from 'react-native';
import ExpensesOutput from "../components/Expenses/ExpensesOutput";


function RecentExpenses(){
    return  (
        <View>
          <Text>Recent expenses</Text>
          <ExpensesOutput expensesPeriod="Last 7 days" />
        </View>
      );
}

export default RecentExpenses;


