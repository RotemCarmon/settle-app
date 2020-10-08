console.log('Expence Service');

const EXPENCES = [
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

function getExpences() {
    return EXPENCES;
}

function addExpence() {
    const expences = getExpences();
    const newExpence = _createExpence();
    expences.unshift(newExpence);
}

export default {
    getExpences,
    addExpence,
};

function _createExpence(date, description, amount, owner = 'rotem') {
    let prevId = _getLastId();
    return {
        id: prevId++,
        date,
        description,
        amount,
        owner,
    };
}

function _getLastId() {
    const expences = getExpences();
    const ids = expences.map((expence) => {
        return expence._id;
    });
    return Math.max(...ids);
}
