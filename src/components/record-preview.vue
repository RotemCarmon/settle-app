<template>
    <section class="record-preview-container">
        <div class="record-preview flex">
            <img
                @click.prevent="onRemoveRecord"
                src="@/assets/icons/x-mark.png"
                alt="x-mark-icon"
                class="icon x-mark-icon"
            />

            <editable-content v-model="copyRecord.date" />
            <editable-content v-model="copyRecord.description" />
            <span class="currency-sign">&#8362;</span>
            <editable-content v-model="copyRecord.amount" :type="'price'" />
        </div>
        <div class="marks">
            <div class="mark split" :class="copyRecord.mode === 'split' ? 'marked' : ''">
                <input type="radio" value="split" v-model="copyRecord.mode" />
            </div>
            <div class="mark full" :class="copyRecord.mode === 'full' ? 'marked' : ''">
                <input type="radio" value="full" v-model="copyRecord.mode" />
            </div>
        </div>
    </section>
</template>

<script>
import editableContent from './common/editable-content.vue';
export default {
    props: {
        record: Object,
    },
    data() {
        return {
            mode: this.record.mode,
            copyRecord: null,
            dataCopyed: false,
        };
    },
    created() {
        this.copyRecord = JSON.parse(JSON.stringify(this.record));
        this.dataCopyed = true;
    },
    methods: {
        onRemoveRecord() {
            this.$store.dispatch({ type: 'removeRecord', recordId: this.record._id });
        },
        onUpdateRecord() {
            this.$store.dispatch({ type: 'updateRecord', record: this.copyRecord });
        },
        // toggleEditMode() {
        //     this.isEdit = !this.isEdit;
        // }
    },
    watch: {
        copyRecord: {
            deep: true,
            handler() {
                if (this.dataCopyed) {
                    console.log('handle update');
                    this.onUpdateRecord();
                }
            },
        },
    },
    components: {
        editableContent,
    },
};
</script>

<style lang="scss" scoped>
</style>
