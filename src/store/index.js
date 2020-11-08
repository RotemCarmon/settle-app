import { createStore } from 'vuex'
import recordStore from './modules/recordStore.js';
import groupStore from './modules/groupStore.js';

export default createStore({

  modules: {
    recordStore,
    groupStore
  }
})
