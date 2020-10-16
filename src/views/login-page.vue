<template>
    <section class="sign-form-container  ">
        <form v-if="isRegistered" class="login-container sign-form flex column">
          <h2>Login</h2>
            <input v-model="cred.email" type="email" placeholder="Enter email" />
            <input v-model="cred.pass" type="password" placeholder="Enter password" />
            <div class="btns flex space-between">
                <button class="btn btn-action btn-login" type="submit">Login</button>
                <button class="btn btn-secondery btn-to-signup" type="submit" @click="isRegistered = false">Register</button>
            </div>
        </form>
        <form v-else class="signup-container sign-form  flex column">
          <h2>Signup</h2>
            <input v-model="cred.username" type="text" placeholder="Enter username" />
            <input v-model="cred.email" type="email" placeholder="Enter email" />
            <input v-model="cred.pass" type="password" placeholder="Enter password" />
            <div class="btns flex space-between">
                <button class="btn btn-action btn-signup" type="submit">Signup</button>
                <button class="btn btn-secondery btn-back-to-login" type="submit" @click="isRegistered = true">Already have an acount</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cred: {
                email: '',
                pass: '',
                username: '',
            },
            isRegistered: true,
        };
    },
};
</script>

<style lang="scss">
.sign-form-container {
    box-shadow: 0 0 4px gray;
    max-width: 500px;
    margin: auto;
    margin-top: 100px;
    padding: 40px;
    .sign-form {
      h2{
        text-align: start;
        margin-bottom: 10px;

      }
      & > input{
        margin-bottom: 8px;
        height: 28px;
        border: none;
        border-bottom: 1px solid gray;
        border-radius: 3px;

      }
    }

    .btn-action{
      padding: 5px 8px;
      background-color:  #0e0e0e;
      color: #f1f1f1;
      &:hover{
      background-color:  #424242;
      }
    }
    .btn-secondery{

      &:hover {
        color: #555555;
        text-decoration: underline;
      }
    }

}
</style>
