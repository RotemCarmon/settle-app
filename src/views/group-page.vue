<template>
  <div class="group-page-header flex justify-center">
    <h1>My Groups</h1>
    <fa
      @click="toggleGroupAdd"
      icon="plus-square"
      type="far"
      class="creat-new-group"
      title="Create new group"
    />
  </div>
  <group-add v-if="isGroupAdd" @close-cmp="toggleGroupAdd" />
  <group-list v-if="groupsToShow" :groups="groupsToShow" />
  <div v-if="!groupsToShow" class="no-groups-to-show">This user has no groups yet...</div>
</template>

<script>
import groupService from "../services/groupService.js";
import groupList from "../components/group/group-list.vue";
import groupAdd from "../components/group/group-add.vue";
export default {
  name: "group-page",
  data() {
    return {
      isGroupAdd: false
    }
  },
  methods: {
    async loadGroups() {
      this.$store.dispatch("loadGroups");
    },
    toggleGroupAdd() {
      this.isGroupAdd = !this.isGroupAdd;
    }
  },
  computed: {
    groupsToShow() {
      const groups = this.$store.getters.getGroups;
      if (!groups || !groups.length) return null;
      return groups;
    }
  },
  created() {
    this.loadGroups();
  },
  components: {
    groupList,
    groupAdd
  }
};
</script>

<style>
</style>