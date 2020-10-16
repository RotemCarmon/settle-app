<template>
    <section v-if="breakdown" class="status-bar-container">
        <div class="status-bar main-layout flex space-between">
            <div class="total-container">
                <sum-status :amount="total" />
            </div>
            <div class="break-down-container flex">
                <sum-status title="This amount is to be split between all group members" :amount="breakdown.split" :icon="'split-money'" />
                <sum-status title="This amount you should be refunded in full" :amount="breakdown.full" :icon="'money'" />
            </div>
        </div>
    </section>
</template>

<script>
import sumStatus from './sum-status';

export default {
    props: {
        breakdown: {
            type: Object,
            default() {
                return { full: 0, split: 0 };
            },
        },
    },
    computed: {
        total() {
            return this.breakdown.split + this.breakdown.full;
        },
    },
    components: {
        sumStatus,
    },
};
</script>

<style lang="scss" scoped>
.status-bar-container {
    background-color: #26887b;
    padding: 8px;
}
.break-down-container :last-child{
    margin-inline-end: 0;
}
</style>
