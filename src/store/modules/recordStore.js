import recordService from '@/services/recordService.js';

export default {
    state: {
        records: null,
        total: 0,
    },
    getters: {
        getRecords(state) {
            return state.records;
        },
        getTotal(state) {
            return state.total;
        },
    },
    mutations: {
        setRecords(state, { records }) {
            state.records = JSON.parse(JSON.stringify(records));
        },
        removeRecord(state, { recordId }) {
            const records = JSON.parse(JSON.stringify(state.records));
            console.log('recordId', recordId);
            try {
                const idx = records.findIndex((record) => record._id === recordId);
                if (idx === -1) throw Error('Idx was not found');
                records.splice(idx, 1);
                state.records = records;
            } catch (error) {
                console.error(error);
            }
        },
        addRecord(state, { newRecord }) {
            state.records.unshift(newRecord);
        },
        updateRecord(state, { updatedRecord }) {
            const records = JSON.parse(JSON.stringify(state.records));
            const recordId = updatedRecord._id;
            try {
                const idx = records.findIndex((record) => record._id === recordId);
                if (idx === -1) throw Error('Idx was not found');
                records.splice(idx, 1, updatedRecord);
                state.records = records;
            } catch (error) {
                console.error(error);
            }
        },
        setTotal(state, { total }) {
            state.total = total;
        },
    },
    actions: {
        async loadRecords(context) {
            const records = await recordService.getRecords();
            console.log('loadRecords -> records', records);

            context.commit({ type: 'setRecords', records });
        },
        async removeRecord(context, { recordId }) {
            // console.log('Before', context.state.records);
            await recordService.removeRecord(recordId);
            context.commit({ type: 'removeRecord', recordId });
        },
        async addRecord(context, { record }) {
            const newRecord = await recordService.addRecord(record);
            context.commit({ type: 'addRecord', newRecord });
        },
        async updateRecord(context, { record }) {
            const updatedRecord = await recordService.updateRecord(record);
            context.commit({ type: 'updateRecord', updatedRecord });
        },
        async calculateTotal(context) {
            const total = await recordService.calculate();
            console.log("calculateTotal -> total", total)
            context.commit({ type: 'setTotal', total });
        },
    },
};
