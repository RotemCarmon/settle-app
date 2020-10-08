<template>
    <div class="form-row">
        <input v-model="expence.date" type="date" placeholder="Date" />
        <input v-model="expence.description" type="text" placeholder="Description" />
        <input v-model="expence.amount" type="number" placeholder="Amount" />
        <input v-model="expence.owner" type="text" placeholder="Owner" />
        <button @click="onAddExpence()">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expence: {
                date: '',
                description: '',
                amount: '',
                owner: '',
            },
        };
    },
    methods: {
        onAddExpence() {
            this.$emit('add-expence', { ...this.expence, date: this.formattedDate});
        },
    },
    computed: {
        formattedDate() {
            let date = this.expence.date;
            return date
                .split('-')
                .reverse()
                .join('/');
        },
    },
};
</script>

<style lang="scss" scoped>
.form-row {
    margin-bottom: 8px;
}
</style>
