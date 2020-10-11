<template>
    <section class="record-preview-container">
        <!-- Use contentEditable see p39 in Vue-Advanced -->
        <div class="record-preview" :contenteditable="isEdit">
            <img
                @click.prevent="onRemoveRecord"
                src="@/assets/icons/x-mark.png"
                alt="x-mark-icon"
                class="icon x-mark-icon"
            />
            <img @click="toggleEditMode" src="@/assets/icons/pencil.png" alt="pencil-icon" class="icon pencil-icon" />
            <h2>{{ record.date }}</h2>
            <h2>{{ record.description }}</h2>
            <h2>&#8362;{{ record.amount }}</h2>
        </div>
        <div class="marks">
            <div class="mark split" :class="mode === 'split' ? 'marked' : ''">
                <input type="radio" value="split" v-model="mode" />
            </div>
            <div class="mark full" :class="mode === 'full' ? 'marked' : ''">
                <input type="radio" value="full" v-model="mode" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        record: Object,
    },
    data() {
        return {
            mode: this.record.mode,
            isEdit: false,
            prevRecord: null
        };
    },
    methods: {
        onRemoveRecord() {
            this.$store.dispatch({ type: 'removeRecord', recordId: this.record._id });
        },
        onUpdateRecord() {
            let record = { ...this.record };
            record.mode = this.mode;
            this.$store.dispatch({ type: 'updateRecord', record });
        },
        toggleEditMode() {
            if (!this.isEdit) {
                console.log('Coping...');
                this.prevRecord = JSON.parse(JSON.stringify(this.record));
            }
            this.isEdit = !this.isEdit;
        },
    },
    watch: {
        mode(val) {
            this.onUpdateRecord();
        },
        isEdit(newVal, oldVal) {
            if (!newVal && oldVal) {
                console.log('Was in edit mode and now is not!');
                if(JSON.stringify(this.prevRecord) !== JSON.stringify(this.record)) {
                    console.log('Record was edited');
                    console.log('Prev', JSON.stringify(this.prevRecord));
                    console.log('curr', JSON.stringify(this.record));
                }
            }
        },
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
        grid-template-columns: 40px 40px 100px auto 90px;
        width: 680px;
        padding: 8px 12px;
        margin-inline-end: 40px;

        color: #272733;
        background-color: lightskyblue;
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
