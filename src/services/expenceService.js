console.log('Expense Service');

const EXPENSES = [
    {
        _id: 1,
        date: '8/10/2020',
        description: 'Falafel',
        amount: 20,
        owner: 'rotem',
    },
    {
        _id: 2,
        date: '7/10/2020',
        description: 'Castro',
        amount: 149,
        owner: 'rotem',
    },
    {
        _id: 3,
        date: '10/10/2020',
        description: 'rent',
        amount: 4000,
        owner: 'rotem',
    },
];
window.exps = EXPENSES


 async function getExpenses() {
    return EXPENSES;
}

remove

 async function addExpense(date, description, amount, owner) {
    const expenses = await getExpenses();
    const newExpense = _createExpense(date, description, amount, owner);
    expenses.unshift(newExpense);

    console.log('The new added expense is:', newExpense );
    return expenses
}

export default {
    getExpenses,
    addExpense,
};

function _createExpense(date, description, amount, owner) {
    let prevId = _getLastId();
    return {
        _id: ++prevId,
        description,
        date,
        amount,
        owner,
    };
}

async function _getLastId() {
    const expenses = await getExpenses()
    const ids = expenses.map((expense) => {
        return expense._id;
    });
    return Math.max(...ids);
}
