<template>
    <h2 :class="{price: isPrice}" @click="isEdit = true" @blur="updateValue" @keydown.enter.prevent="updateValue" :contenteditable="isEdit">
       <span v-if="isPrice">&#8362;</span> {{ modelValue }}
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
            this.$emit('update:modelValue', ev.target.innerText);
        }
    },
};
</script>

<style lang="scss" scoped>
  .price {
    text-align: start;
  }
</style>
