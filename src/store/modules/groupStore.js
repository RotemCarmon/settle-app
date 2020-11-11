import groupService from '@/services/groupService.js';

export default {
  state: {
    groups: null,
    currGroupId: null
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
    setCurrGroup(state, { groupId }) {
      state.currGroupId = groupId;
    },
    addGroup(state, newGroup) {
      console.log("addGroup -> payload", newGroup)
      state.groups.unshift(newGroup);
    }
  },
  actions: {
    async loadGroups(context) {
      const userId = context.rootState.userStore.loggedinUser._id;
      const groups = await groupService.getGroups(userId);
      context.commit({ type: 'setGroups', groups });
    },
    async createNewGroup(context, { title , users}) {
      const currUserId = context.rootState.userStore.loggedinUser._id;
      // send invitations to users - here
      const newGroup = await groupService.createGroup({ title, userId: currUserId, users });
      context.commit('addGroup', newGroup)
    }
  }
};