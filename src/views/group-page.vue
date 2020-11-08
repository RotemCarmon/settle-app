<template>
  <h1>Groups</h1>
  <group-list :groups="groupsToShow" />

</template>

<script>
import groupService from "../services/groupService.js";
import groupList from '../components/group/group-list.vue';
export default {
  name: "group-page",
  methods: {
    async loadGroups() {
      this.$store.dispatch("loadGroups");
    }
  },
  computed: {
     groupsToShow() {
            const groups = this.$store.getters.getGroups;
            if(!groups || !groups.length) return null
            return groups
        },
  },
  created() {
    this.loadGroups();
  },
  components:{
    groupList
  }
};
</script>

<style>
</style>