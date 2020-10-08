<template>
    <section class="expence-preview-container">
        <h2>{{ expence.date }}</h2>
        <h2>{{ expence.description }}</h2>
        <h2>&#8362;{{ expence.amount }}</h2>
    </section>
</template>

<script>
export default {
    props: {
        expence: Object,
    }
};
</script>

<style lang="scss" scoped>
.expence-preview-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    width: 65%;
    padding: 8px 12px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;

    color: rgb(39, 39, 51);
    background-color: lightskyblue;
    border: 1px solid lightgrey;
    border-radius: 8px;

    box-shadow: -2px 1px 4px grey;
    left: 0px;

    &:hover {
        cursor: pointer;
        box-shadow: -4px 2px 4px grey;
        left: 2px;
        bottom: 1px;
        transition: 0.2s;
    }

    h2 {
        margin: 0;
        font-size: 1.4em;
        font-weight: lighter;
    }
}
</style>
