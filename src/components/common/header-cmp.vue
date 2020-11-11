<template>
  <section class="header-container ">
    <div class="header-content flex main-layout space-between">
      <router-link to="/" class="logo">
        <img class="home-logo" :src="homeSvg" />
      </router-link>
      <div class="header flex">
        <div class="hamburger" @click="toggleNav">☰</div>
        <div class="avatar-container" v-if="loggedInUser">
          <user-avatar
            :isUser="true"
            :userName="loggedInUser.username"
            color="#cece28"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userAvatar from "./user-avatar";

export default {
  data() {
    return {
      homeSvg: require("../../assets/icons/home-black.svg"),
    };
  },
  methods: {
    toggleNav() {
      this.$emit("toggle-nav");
    }
  },
  computed: {
    loggedInUser(){
      return this.$store.getters.loggedinUser;
    }
  },
  components: {
    userAvatar
  }
};
</script>