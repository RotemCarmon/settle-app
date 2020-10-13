<template>
    <section class="main-container">
        <status-bar :breakdown="breakdown" />
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
        this.calculateBreakdown();

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
        async calculateBreakdown() {
            this.$store.dispatch('calculateBreakdown');
        },
    },
    computed: {
        recordsToShow() {
            return this.$store.getters.getRecords;
        },
        breakdown() {
            return this.$store.getters.getBreakdown;
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
