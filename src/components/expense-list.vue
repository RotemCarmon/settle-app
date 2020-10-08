<template>
  <section class="expence-list-container">
    <expence-preview
      v-for="expence in expences"
      :expence="expence"
      :key="expence._id"
    />
  </section>
</template>

<script>
import expencePreview from './expense-preview.vue'
export default {
  props: {
    expences: Array
  },
  components: {
    expencePreview
  }
}
</script>

<style></style>
