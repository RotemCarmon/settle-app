<template>
    <section class="main-container">
        <h1>Expenses</h1>
        <input-section @add-expense="addExpense" />
        <expense-list :expenses="expensesToShow" />
    </section>
</template>

<script>
import expenseService from '../services/expenseService.js';
import expenseList from '../components/expense-list';
import inputSection from '../components/input-section';
export default {
    data() {
        return {
            expenses: [],
        };
    },
    created() {
        this.loadExpenses();
    },
    methods: {
        async loadExpenses() {
            this.expenses = await expenseService.getExpenses();
        },
        async addExpense(payload) {
            const { date, description, amount, owner } = payload;
            const exps = await expenseService.addExpense(date, description, amount, owner);
            console.log('expenses',exps);
            this.expenses = [...exps];
        },
    },
    computed: {
        expensesToShow() {
            return this.expenses;
        },
    },
    components: {
        expenseList,
        inputSection,
    },
};
</script>

<style></style>
