<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$props.class"
    class="fa-size"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <path fill="currentColor" :d="svgPath" />
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default defineComponent({
  name: "font-awesome-icon",

  props: {
    icon: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "fas",
      required: false
    },
    class: {
      type:String,
      // default: 'fa-size'
    } 
  },

  setup(props) {
    const definition = computed(() =>
      findIconDefinition({
        prefix: props.type,
        iconName: props.icon
      })
    );

    const width = computed(() => definition.value.icon[0]);
    const height = computed(() => definition.value.icon[1]);
    const svgPath = computed(() => definition.value.icon[4]);

    return { width, height, svgPath };
  }
});
</script>

<style>
  .fa-size{
    height: 25px;
  }
</style>