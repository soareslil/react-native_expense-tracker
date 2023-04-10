import axios from 'axios';

export function storeExpenses(expenseData){
    axios.post('https://react-native-expensetrac-57be2-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    );
}
