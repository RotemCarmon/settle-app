<template>
    <section class="record-preview-container">
        <div class="record-preview flex">
            <img
                @click.prevent="onRemoveRecord"
                src="@/assets/icons/x-mark.png"
                alt="x-mark-icon"
                class="icon x-mark-icon"
            />
            
            <editable-content v-model="copyRecord.date"/>
            <editable-content v-model="copyRecord.description"/>
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
            isEdit: false,
        };
    },
    created() {
        this.copyRecord = JSON.parse(JSON.stringify(this.record));
    },
    methods: {
        onRemoveRecord() {
            this.$store.dispatch({ type: 'removeRecord', recordId: this.record._id });
        },
        onUpdateRecord() {
            this.isEdit = false;
            this.$store.dispatch({ type: 'updateRecord', record: this.copyRecord });
        },
        toggleEditMode() {
            this.isEdit = !this.isEdit;
        }
    },
    watch: {
        copyRecord: {
            deep: true,
            handler(){
                this.onUpdateRecord();
            }
        },
    },
    components: {
        editableContent,
    },
};
</script>

<style lang="scss" scoped>
.record-preview-container {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;

    .record-preview {
        position: relative;
        display: grid;
        grid-template-columns: 50px 120px auto 90px;
        width: 680px;
        padding: 8px 12px;
        margin-inline-end: 40px;

        color: #272733;
        background-color: #56C596;
        border: 1px solid lightgrey;
        border-radius: 8px;

        &:hover {
            cursor: pointer;
        }
        h2 {
            margin: 0;
            font-size: 1.2em;
            font-weight: lighter;
        }
        img.icon {
            align-self: center;
            width: 18px;
            &:hover {
                transition: 0.4s;
                transform: scale(1.1);
            }
        }
    }
    .marks {
        display: flex;
        align-items: center;
        .mark {
            height: 25px;
            width: 25px;
            border-radius: 50%;
            border: 1px solid black;

            input[type='radio'] {
                height: 100%;
                width: 100%;
                margin: 0;
                opacity: 0;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .marked {
            background-color: #272733;
        }

        .mark:first-child {
            margin-inline-end: 20px;
        }
    }
}
</style>
