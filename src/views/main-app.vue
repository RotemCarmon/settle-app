<template>
  <section class="main-container">
    <h1>Expences</h1>
    <input-section />
    <expense-list :expences="expences" />
  </section>
</template>

<script>
import expenceService from '../services/expenceService.js'
import expenseList from '../components/expense-list'
import inputSection from '../components/input-section'
export default {
  data() {
    return {
      expences: []
    }
  },
  created() {
    this.expences = expenceService.getExpences()
  },
  components: {
    expenseList,
    inputSection
  }
}
</script>

<style></style>
