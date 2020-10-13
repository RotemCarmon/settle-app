<template>
    <section v-if="breakdown" class="status-bar-container">
        <div class="status-bar main-layout flex space-between">
            <div class="total-container">
                <sum-status :amount="total" />
            </div>
            <div class="break-down-container flex">
                <sum-status :amount="breakdown.full" :icon="'money'" />
                <sum-status :amount="breakdown.split" :icon="'split-money'" />
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
    background-color: #25523b;
    padding: 8px;
}
</style>
