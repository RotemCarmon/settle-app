<template>
    <section class="sum-status-container flex align-center">
        <img :src="require(`@/assets/icons/${icon}.png`)" class="icon" />
        <div class="amount">
            {{ amount }}
        </div>
    </section>
</template>

<script>
export default {
    props: {
        amount: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            default: 'money',
        },
    },
};
</script>

<style lang="scss" scoped>
.sum-status-container {
    width: 100px;
    background-color:#DCEDC1;
    margin-inline-end: 8px;
    padding: 3px;
    .icon {
        width: 30px;
        height: 30px;
    }
    .amount{
      padding-inline-start: 5px;
    }
}
</style>
