<template>
  <header-cmp />
  <main class="main-app-container">
    <router-view @setUser="setUser" />
  </main>
</template>
<script>
import headerCmp from "./components/common/header-cmp";
export default {
  name: "App",
  data() {
    return {
      user: null
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    }
  },
  components: {
    headerCmp
  }
};
</script>

<style lang="scss">
#app {
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
