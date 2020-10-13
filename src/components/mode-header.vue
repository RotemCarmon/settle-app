<template>
    <section class="mode-header-container">
        <div class="phantom-area"></div>
        <div class="mode-header">
            <img class="icon split-icon" src="@/assets/icons/split-money.png" alt="split-money-icon" />
            <img class="icon full-icon" src="@/assets/icons/money.png" alt="full-money-icon" />
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mode-header-container {
    display: flex;
    justify-content: center;
    .phantom-area {
        width: 100%;
        margin-inline-end: 40px;
    }

    .mode-header {
        display: flex;
        margin-bottom: 15px;
        .icon{
          width: 30px;
          height: 30px;
        }
             .icon:first-child {
            margin-inline-end: 20px;
        }
    }
}
</style>
