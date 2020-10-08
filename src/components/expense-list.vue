<template>
  <section class="expence-list-container">
    <mode-header />
    <expence-preview
      v-for="expence in expences"
      :expence="expence"
      :key="expence._id"
    />
  </section>
</template>

<script>
import expencePreview from './expense-preview.vue'
import modeHeader from './mode-header.vue'
export default {
  props: {
    expences: Array
  },
  components: {
    expencePreview,
    modeHeader
  }
}
</script>

<style></style>
