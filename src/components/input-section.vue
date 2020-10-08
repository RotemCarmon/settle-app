<template>
  <form>
    <div class="form-row">
      <input v-model="date" type="date" placeholder="Date" />
      <input v-model="description" type="text" placeholder="Description" />
      <input v-model="amount" type="number" placeholder="Amount" />
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      description: '',
      amount: ''
    }
  }
}
</script>

<style></style>
