import { Text } from 'react-native';
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function RecentExpenses(){
    return  (
        <>
          <Text>Recent expenses</Text>
          <ExpensesOutput expensesPeriod="Last 7 days" />
        </>
      );
}

export default RecentExpenses;

