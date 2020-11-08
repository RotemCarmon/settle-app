import groupService from '@/services/groupService.js';

export default {
  state: {
    groups: null
  },
  getters: {
    getGroups(state) {
      return state.groups;
    }
  },
  mutations: {
    setGroups(state, { groups }) {
      state.groups = JSON.parse(JSON.stringify(groups));
    },
  },
  actions: {
    async loadGroups(context) {
      const groups = await groupService.getGroups();
      context.commit({ type: 'setGroups', groups });
      console.log("loadGroups -> groups", groups)
  },
  }
};