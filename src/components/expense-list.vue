<template>
  <section class="expense-list-container">
    <mode-header />
    <expense-preview
      v-for="expense in expenses"
      :expense="expense"
      :key="expense._id"
    />
  </section>
</template>

<script>
import expensePreview from './expense-preview.vue'
import modeHeader from './mode-header.vue'
export default {
  props: {
    expenses: Array
  },
  components: {
    expensePreview,
    modeHeader
  }
}
</script>

<style></style>
