<template>
    <h2 :class="{price: isPrice}" @click="isEdit = true" @blur="updateValue" @keydown.enter.prevent="updateValue" :contenteditable="isEdit">
        {{ modelValue }}
    </h2>
</template>

<script>
export default {
    // props: ['modelValue'],
    props:{
      modelValue:{
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
        return {
            isEdit: false,
        };
    },
    computed: {
      isPrice(){
        return this.type === 'price';
      }
    },
    methods: {
        updateValue(ev) {
            this.isEdit = false;
            this.$emit('update:modelValue', value);
        }
    },
};
</script>

<style lang="scss" scoped>
  .price {
    text-align: start;
  }
</style>
