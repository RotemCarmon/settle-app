console.log('Record Service');

const RECORDS = [
    {
        _id: 5,
        date: '28/09/2020',
        description: 'meat',
        amount: 140,
        owner: 'jeri',
        mode: 'split',
    },
    {
        _id: 4,
        date: '02/10/2020',
        description: 'dog food',
        amount: 230,
        owner: 'rotem',
        mode: 'full',
    },
    {
        _id: 3,
        date: '10/10/2020',
        description: 'rent',
        amount: 4000,
        owner: 'rotem',
        mode: 'split',
    },
    {
        _id: 2,
        date: '7/10/2020',
        description: 'shmpoo',
        amount: 149,
        owner: 'jeri',
        mode: 'full',
    },
    {
        _id: 1,
        date: '8/10/2020',
        description: 'Falafel',
        amount: 20,
        owner: 'rotem',
        mode: 'split',
    },
];
window.records = RECORDS;

var gLoggedInUser = 'rotem'

async function getRecords() {
    return RECORDS;
}

async function removeRecord(id) {
    const records = await getRecords();
    let idx = records.findIndex((record) => record._id === id);
    if (idx === -1) throw new Error(`The record with id: ${id} was not found and was not deleted`);
    const deletedRecord = records.splice(idx, 1)[0];

    return deletedRecord;
}

async function addRecord(record) {
    const records = await getRecords();
    const { date, description, amount, owner } = record;
    let formatedDate = formatDate(date);

    const newRecord = await _createRecord(formatedDate, description, amount, owner);
    records.unshift(newRecord);

    console.log('The new added record is:', newRecord);
    return newRecord;
}

async function updateRecord(record) {
    // console.log('The recird that needs to be updates is:', record);
    const recordId = record._id;
    const records = await getRecords();
    let idx = records.findIndex((record) => record._id === recordId);
    if (idx === -1) throw new Error(`The record with id: ${id} was not found and was not updated`);
    records.splice(idx, 1, record)[0];
    return record;
}

async function calculate() {
    const records = await getRecords();

    return records.reduce((acc, record) => {
        let amount = record.amount;
       if(record.owner === gLoggedInUser){
           if(!acc[record.mode]) acc[record.mode] = 0 
           acc[record.mode] += amount
       }
        return acc;
    }, {});
}

    
// async function getRecordById(id){
//     const records = await getRecords();
//     return records.find(record => record._id === id)
// }

export default {
    getRecords,
    addRecord,
    removeRecord,
    updateRecord,
    calculate
};

async function _createRecord(date, description, amount, owner) {
    let prevId = await _getLastId();
    return {
        _id: ++prevId,
        description,
        date,
        amount,
        owner,
        isSplit: true,
    };
}

async function _getLastId() {
    const records = await getRecords();
    const ids = records.map((record) => {
        return record._id;
    });
    return Math.max(...ids);
}

function formatDate(date) {
    return date
        .split('-')
        .reverse()
        .join('/');
}
