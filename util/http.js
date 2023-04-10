import axios from 'axios';

const BACKEND_URL= 'https://react-native-expensetrac-57be2-default-rtdb.firebaseio.com'

export function storeExpenses(expenseData){
    axios.post(
        BACKEND_URL + '/expense.json',
    expenseData
    );
}

export async function fetchExpense(){
  const response = await axios.get(
        BACKEND_URL + '/expenses.json'
    );
    
    const expenses = [];

    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
}