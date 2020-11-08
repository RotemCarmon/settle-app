<template>
<section class="group-preview-container flex column align-center space-between" @click="goToGroup">
  <h1>{{group.title}}</h1>
  <div class="users-avatar flex space-between">
    <user-avatar v-for="user in group.users" :userName="user.username"  :key="user._id" />
  </div>
</section>
</template>

<script>
import userAvatar from '../common/user-avatar.vue';
export default {
  name:'group-preview',
  props:{
    group:{
      type: Object
    }
  },
  methods: {
    goToGroup(){
      this.$router.push(`/group/${this.group._id}`)
    }
  },
  components:{
    userAvatar
  }

}
</script>

<style>

</style>