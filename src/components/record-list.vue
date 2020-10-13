<template>
  <section class="record-list-container  main-layout">
    <mode-header />
    <record-preview
      v-for="record in records"
      :record="record"
      :key="record._id"
    />
  </section>
</template>

<script>
import recordPreview from './record-preview.vue'
import modeHeader from './mode-header.vue'
export default {
  props: {
    records: Array
  },
  components: {
    recordPreview,
    modeHeader
  }
}
</script>

<style>
.record-list-container{
  padding: 20px;
}

</style>
