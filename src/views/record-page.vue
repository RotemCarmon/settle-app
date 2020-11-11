<template>
  <section class="main-container">
    <!-- <status-bar :breakdown="breakdown" /> -->
    <!-- <header-cmp /> -->
    <main>
      <h2 class="transaction-header">Transactions</h2>
      <record-add />
      <record-list v-if="recordsToShow" :records="recordsToShow" />
      <div v-else class="no-records">No Records To Show</div>
    </main>
  </section>
      <status-bar />
</template>

<script>
import recordService from "../services/recordService.js";
import statusBar from "../components/status/status-bar";
import recordList from "../components/record/record-list";
import recordAdd from "../components/record/record-add";
import { handleError } from "vue";

export default {
  created() {
    const groupId = this.$route.params.id;

    this.loadRecords(groupId);
    // this.calculateBreakdown();
  },
  methods: {
    async loadRecords(groupId) {
      this.$store.dispatch("loadRecords", { groupId });
    },
    async addRecord(payload) {
      const { date, description, amount, owner } = payload;
      const records = await recordService.addRecord(
        date,
        description,
        amount,
        owner
      );
      this.records = [...records];
    }
    // async calculateBreakdown() {
    //     this.$store.dispatch('calculateBreakdown');
    // },
  },
  computed: {
    recordsToShow() {
      const records = this.$store.getters.getRecords;
      if (!records || !records.length) return null;
      return records;
    }
    // breakdown() {
    //     return this.$store.getters.getBreakdown;
    // },
  },
  // watch:{
  //     recordsToShow:{
  //         deep:true,
  //         handler(){
  //             this.calculateBreakdown()
  //         }
  //     }
  // },
  components: {
    recordList,
    recordAdd,
    statusBar
    // headerCmp
  }
};
</script>

<style>
.transaction-header {
  padding: 24px;
}
.no-records {
  font-size: 1.3rem;
  font-weight: 700;
  padding-top: 60px;
}
</style>
