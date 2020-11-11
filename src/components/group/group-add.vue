<template>
  <div class="group-add-container">
    <h2>Create a new group</h2>
    <input type="text" v-model="title" placeholder="Enter group name" />
    <button class="btn" @click="create">Create</button>

    <div class="invite-user flex column">
      <div class="invite-input flex space-around">
      <input type="email" v-model="user">
      <fa icon="plus-circle" @click="inviteUser" />
      </div>
      <div class="invitedUsers">
        <p v-for="(user, idx) in users" :key="idx" class="user">{{user}} <span @click="unInviteUser(idx)">X</span> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "group-add",
  data() {
    return {
      title:'',
      user:'',
      users: []
    };
  },
  methods: {
    inviteUser(){
      console.log('Invite....');
      this.users.unshift(this.user);
      this.user = ''
    },
    unInviteUser(idx){
      this.users.splice(idx, 1)
    },
    create(){
      this.$store.dispatch('createNewGroup', { title: this.title, users: this.users});
      // Send Invites to users
      this.$emit('close-cmp')
    }
  }
};
</script>