import { createStore } from 'vuex'
import recordStore from './modules/recordStore.js';

export default createStore({

  modules: {
    recordStore
  }
})
