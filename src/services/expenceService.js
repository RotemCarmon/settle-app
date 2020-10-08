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

window.exps = EXPENCES

 async function getExpences() {
    return EXPENCES;
}

 async function addExpence(date, description, amount, owner) {
    const expences = await getExpences();
    const newExpence = _createExpence(date, description, amount, owner);
    expences.unshift(newExpence);

    console.log('The new added expence is:', newExpence );
    return expences
}

export default {
    getExpences,
    addExpence,
};

function _createExpence(date, description, amount, owner) {
    let prevId = _getLastId();
    return {
        _id: ++prevId,
        date,
        description,
        amount,
        owner,
    };
}

async function _getLastId() {
    const expences = await getExpences()
    const ids = expences.map((expence) => {
        return expence._id;
    });
    return Math.max(...ids);
}
