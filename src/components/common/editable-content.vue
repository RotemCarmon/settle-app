<template>
    <h2 @click="isEdit = true" @blur="updateValue" @keydown.enter.prevent="updateValue" :contenteditable="isEdit">
        {{ modelValue }}
    </h2>
</template>

<script>
export default {
    props: ['modelValue'],
    data() {
        return {
            isEdit: false,
        };
    },
    methods: {
        updateValue(ev) {
            this.isEdit = false;
            this.$emit('update:modelValue', ev.target.innerText);
        }
    },
};
</script>

<style></style>
