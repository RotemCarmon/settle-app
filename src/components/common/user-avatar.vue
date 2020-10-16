<template>
    <section
        :style="{ backgroundColor: color }"
        class="user-avatar-container flex center-center"
        :class="{ 'curr-user': isUser }"
    >
        {{ avatarName }}
    </section>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#cece28',
        },
        userName: {
            type: String,
            default: 'user',
        },
        isUser: {
          type: Boolean,
          default: false
        }
    },
    computed: {
        avatarName() {
            const avatarNames = this.userName.split(' ');
            if (avatarNames.length === 1) return avatarNames[0].charAt(0).toUpperCase();
            return avatarNames[0].charAt(0).toUpperCase() + avatarNames[1].charAt(0).toUpperCase();
        },
    },
};
</script>
