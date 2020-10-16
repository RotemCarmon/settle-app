<template>
    <div class="record-add-container flex main-layout">
        <input v-model="record.date" type="date" placeholder="Date" />
        <input v-model="record.description" type="text" placeholder="Description" />
        <input v-model.number="record.amount" type="number" placeholder="Amount" />
        <input v-model="record.owner" hidden type="text" placeholder="Owner" />
        <button class="add-btn" @click="onAddRecord()">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            record: {
                date: '',
                description: '',
                amount: '',
                owner: 'rotem',
            },
        };
    },
    methods: {
        onAddRecord() {
            if (!this.record.amount) return console.log('Amount most be entered');
            this.$store.dispatch({ type: 'addRecord', record: this.record });
            this.getEmptyRecord();
        },
        getEmptyRecord() {
            this.record = {
                date: '',
                description: '',
                amount: '',
                owner: 'rotem',
            };
        },
    },
};
</script>

