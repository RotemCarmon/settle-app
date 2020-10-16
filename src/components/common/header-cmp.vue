<template>
    <section class="header-container">
        <div class="header flex main-layout">
            <div class="hamburger">☰</div>

            <div class="avatar-container">
                <user-avatar  :isUser="true" userName="Rotem Carmon" color="#cece28" />
                <user-avatar userName="Jeri Stein" color="#ce8e11" />
            </div>
        </div>
    </section>
</template>

<script>
import userAvatar from './user-avatar';
export default {

    components: {
        userAvatar,
    },
};
</script>