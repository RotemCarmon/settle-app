<template>
    <section class="expence-preview-container">
        <div class="expence-preview">
            <img class="icon x-mark-icon" src="@/assets/icons/x-mark.png" alt="x-mark-icon" />
            <img class="icon pencil-icon" src="@/assets/icons/pencil.png" alt="pencil-icon" />
            <h2>{{ expence.date }}</h2>
            <h2>{{ expence.description }}</h2>
            <h2>&#8362;{{ expence.amount }}</h2>
        </div>
        <div class="marks">
            <div class="mark split" :class="mark === 'split' ? 'marked' : ''">
                <input type="radio" value="split" v-model="mark" />
            </div>
            <div class="mark full" :class="mark === 'full' ? 'marked' : ''">
                <input type="radio" value="full" v-model="mark" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        expence: Object,
    },
    data() {
        return {
            mark: 'split',
        };
    },
};
</script>

<style lang="scss" scoped>
.expence-preview-container {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    .expence-preview {
        position: relative;
        display: grid;
        grid-template-columns: 40px 40px 95px auto 90px;
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
