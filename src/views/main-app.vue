<template>
    <section class="main-container">
        <status-bar :total="total" />
        <input-section />
        <record-list :records="recordsToShow" />
    </section>
</template>

<script>
import recordService from '../services/recordService.js';
import statusBar from '../components/status/status-bar';
import recordList from '../components/record-list';
import inputSection from '../components/input-section';
export default {
    created() {
        this.loadRecords();
        this.calculateTotal();
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
        async calculateTotal() {
            this.$store.dispatch('calculateTotal');
        },
    },
    computed: {
        recordsToShow() {
            return this.$store.getters.getRecords;
        },
        total() {
            return this.$store.getters.getTotal;
        },
    },
    components: {
        recordList,
        inputSection,
        statusBar,
    },
};
</script>

<style></style>
