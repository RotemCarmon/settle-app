<template>
    <section class="status-bar-container flex justify-center">
        <div class="break-down-container">
            <sum-status :amount="total.full" :icon="'money'" />
            <sum-status :amount="total.split" :icon="'split-money'" />
        </div>
    </section>
</template>

<script>
import sumStatus from './sum-status';

export default {
    props: {
        total: {
            type: Object,
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
