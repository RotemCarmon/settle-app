<template>
    <section class="main-container">
        <h1>Expences</h1>
        <input-section @add-expence="addExpence" />
        <expense-list :expences="expencesToShow" />
    </section>
</template>

<script>
import expenceService from '../services/expenceService.js';
import expenseList from '../components/expense-list';
import inputSection from '../components/input-section';
export default {
    data() {
        return {
            expences: [],
        };
    },
    created() {
        this.loadExpences();
    },
    methods: {
        async loadExpences() {
            this.expences = await expenceService.getExpences();
        },
        async addExpence(payload) {
            const { date, description, amount, owner } = payload;
            const exps = await expenceService.addExpence(date, description, amount, owner);
            console.log('expences',exps);
            this.expences = [...exps];
        },
    },
    computed: {
        expencesToShow() {
            return this.expences;
        },
    },
    components: {
        expenseList,
        inputSection,
    },
};
</script>

<style></style>
