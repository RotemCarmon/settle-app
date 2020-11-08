<template>
  <section class="nav-bar-container" :class="openNav"> 
    <nav class=" nav-bar flex column" @click="navigate">
      <router-link  to="/">Home</router-link>
      <router-link :to="{path:'/group'}">My Groups</router-link>
      <router-link to="#">My Settles</router-link>
      <router-link to="#">Archive</router-link>
    </nav>
  </section>
</template>

<script>

export default {
  name: "nav-bar",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigate(){
      this.$emit('navigate')
    }
  },
  computed:{
    openNav(){
      return {open: this.isOpen}
    },
  }
};
</script>

<style lang="scss">
.nav-bar-container {
  position: fixed;
  z-index: 10;
  top: 92px;
  right: 0;
  padding: 8px;
  background-color: #26887b96;
  font-size: 1.6rem;
  transform: translateX(100%);
  transition: transform .6s;
  &.open {
  transform: translateX(0);

  }
  .nav-bar {
    & > * {
      background-color: #26887b;
      padding: 12px;
      margin: 12px 4px;
      transition: box-shadow 0.6s;
      &:hover {
        box-shadow: inset 6px 0 0 lightgray;
        cursor: pointer;
      }
    }
  }
}
</style>