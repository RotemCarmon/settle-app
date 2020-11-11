<template>
  <header-cmp @toggle-nav="toggleScreen" />
  <main class="main-container">
    <router-view @setUser="setUser" />
  </main>

  <transition name="fade">
    <screen-cmp v-if="isNavOpen" @click="toggleScreen(false)" />
  </transition>
  <nav-bar :isOpen="isNavOpen" @navigate="toggleScreen(false)" />

</template>
<script>
import headerCmp from "./components/common/header-cmp";
import screenCmp from "./components/common/screen-cmp.vue";
import navBar from "./components/common/nav-bar.vue";
export default {
  name: "App",
  data() {
    return {
      user: null,
      isNavOpen: false
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
    toggleScreen() {
      this.isNavOpen = !this.isNavOpen;
    }
  },
  computed: {
    open() {
      return this.isNavOpen;
    }
  },
  components: {
    headerCmp,
    screenCmp,
    navBar
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  z-index: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
