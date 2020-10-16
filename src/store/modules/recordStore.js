import recordService from '@/services/recordService.js';

export default {
    state: {
        records: null,
        breakdown: null,
    },
    getters: {
        getRecords(state) {
            return state.records;
        },
        getBreakdown(state) {
            return state.breakdown;
        },
    },
    mutations: {
        setRecords(state, { records }) {
            state.records = JSON.parse(JSON.stringify(records));
        },
        removeRecord(state, { recordId }) {
            const records = JSON.parse(JSON.stringify(state.records));
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
            try {
                const recordId = updatedRecord._id;
                const idx = records.findIndex((record) => record._id === recordId);
                if (idx === -1) throw Error('Idx was not found');
                records.splice(idx, 1, updatedRecord);
                state.records = records;
            } catch (error) {
                console.error(error);
            }
        },
        setBreakdown(state, { breakdown }) {
            state.breakdown = breakdown;
        },
    },
    actions: {
        async loadRecords(context) {
            const records = await recordService.getRecords();
            context.commit({ type: 'setRecords', records });
        },
        async removeRecord(context, { recordId }) {
            await recordService.removeRecord(recordId);
            context.commit({ type: 'removeRecord', recordId });
        },
        async addRecord(context, { record }) {
            const newRecord = await recordService.addRecord(record);
            console.log("addRecord -> newRecord", newRecord)
            context.commit({ type: 'addRecord', newRecord });
        },
        async updateRecord(context, { record }) {
            const updatedRecord = await recordService.updateRecord(record);
            if(!updatedRecord) return
            context.commit({ type: 'updateRecord', updatedRecord });
        },
        async calculateBreakdown(context) {
            const breakdown = await recordService.calculate();
            context.commit({ type: 'setBreakdown', breakdown });
        },
    },
};
