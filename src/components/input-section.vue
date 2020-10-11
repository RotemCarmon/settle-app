<template>
    <div class="form-row">
        <input v-model="record.date" type="date" placeholder="Date" />
        <input v-model="record.description" type="text" placeholder="Description" />
        <input v-model="record.amount" type="number" placeholder="Amount" />
        <input v-model="record.owner" type="text" placeholder="Owner" />
        <button @click="onAddRecord()">Add</button>
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
                owner: '',
            },
        };
    },
    methods: {
        onAddRecord() {
            // TODO: verify that the required inputs are filled
            this.$store.dispatch({type: 'addRecord', record: this.record})

            // this.$emit('add-record', { ...this.record, date: this.formattedDate});
        },
        getEmptyRecord(){
            // Get an empty record
        }
    }
};
</script>

<style lang="scss" scoped>
.form-row {
    margin-bottom: 8px;
}
</style>
