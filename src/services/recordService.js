import httpService from './httpService'

console.log('Record Service');

const RECORDS = [
    {
        _id: 5,
        date: '28/09/2020',
        description: 'meat',
        amount: 140,
        owner: 'rotem',
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
        owner: 'rotem',
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
    // return httpService.get(`record?${queryParams}`)
    return httpService.get(`record`)
}

async function removeRecord(recordId) {
  return httpService.delete(`record/${recordId}`, recordId);
}

async function addRecord(record) {
    
    let formatedDate = formatDate(record.date);
    record.date = formatedDate;
    record.mode = 'split'
    return httpService.post('record', record)

}

async function updateRecord(record) {
    record.amount = +record.amount;
    await httpService.put(`record/${record._id}`, record)
    return record

}

// async function calculate() {
//     const records = await getRecords();

//     return records.reduce((acc, record) => {
//         let amount = record.amount;
//        if(record.owner === gLoggedInUser){
//            if(!acc[record.mode]) acc[record.mode] = 0 
//            acc[record.mode] += amount
//        }
//         return acc;
//     }, {split:0, full:0});
// }


export default {
    getRecords,
    addRecord,
    removeRecord,
    updateRecord,
    // calculate
};

// async function _createRecord(date, description, amount, owner) {
//     let prevId = await _getLastId();
//     return {
//         _id: ++prevId,
//         description,
//         date,
//         amount,
//         owner,
//         mode: 'split'
//     };
// }

// async function _getLastId() {
//     const records = await getRecords();
//     const ids = records.map((record) => {
//         return record._id;
//     });
//     return Math.max(...ids);
// }

// function formatDate(date) {
//     return date
//         .split('-')
//         .reverse()
//         .join('/');
// }
