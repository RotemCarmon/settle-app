<template>
    <section class="main-container">
        <h1>Records</h1>
        <input-section />
        <record-list :records="recordsToShow" />
    </section>
</template>

<script>
import recordService from '../services/recordService.js';
import recordList from '../components/record-list';
import inputSection from '../components/input-section';
export default {

    created() {
        this.loadRecords();
    },
    methods: {
        async loadRecords() {
            this.$store.dispatch('loadRecords');
        },
        async addRecord(payload) {
            const { date, description, amount, owner } = payload;
            const records = await recordService.addRecord(date, description, amount, owner);
            this.records = [...records];
        },
    },
    computed: {
        recordsToShow() {
            return this.$store.getters.getRecords
        },
    },
    components: {
        recordList,
        inputSection,
    },
};
</script>

<style></style>
