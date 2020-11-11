<template>
  <section class="group-list-container flex wrap">
    <group-preview
      v-for="group in groups"
      :group="group"
      :key="group._id"
    />
  </section>
</template>

<script>
import groupPreview from './group-preview.vue'
export default {
  props: {
    groups: Array
  },
  components: {
    groupPreview
  }
}
</script>
