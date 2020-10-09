<template>
    <div class="form-row">
        <input v-model="expense.date" type="date" placeholder="Date" />
        <input v-model="expense.description" type="text" placeholder="Description" />
        <input v-model="expense.amount" type="number" placeholder="Amount" />
        <input v-model="expense.owner" type="text" placeholder="Owner" />
        <button @click="onAddExpense()">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expense: {
                date: '',
                description: '',
                amount: '',
                owner: '',
            },
        };
    },
    methods: {
        onAddExpense() {
            this.$emit('add-expense', { ...this.expense, date: this.formattedDate});
        },
    },
    computed: {
        formattedDate() {
            let date = this.expense.date;
            return date
                .split('-')
                .reverse()
                .join('/');
        },
    },
};
</script>

<style lang="scss" scoped>
.form-row {
    margin-bottom: 8px;
}
</style>
