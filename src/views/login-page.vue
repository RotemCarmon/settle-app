<template>
  <section class="sign-form-container">
    <form
      v-if="isRegistered"
      @submit.prevent="login"
      class="login-container sign-form flex column"
    >
      <h2>Login</h2>
      <input
        ref="email"
        v-model="cred.email"
        type="email"
        placeholder="Enter email"
      />
      <div v-if="error.email" class="error email-error">
        <fa icon="exclamation-triangle" class="fa-icon fa-size"/>
        {{ error.email }}
      </div>
      <input
        v-model="cred.password"
        type="password"
        placeholder="Enter password"
      />
      <div v-if="error.password" class="error password-error">
        <fa icon="exclamation-triangle" class="fa-icon fa-size"/>
        {{ error.password }}
      </div>
      <div class="btns flex space-between">
        <button class="btn btn-action btn-login" type="submit">Login</button>
        <button
          class="btn btn-secondery btn-to-signup"
          type="button"
          @click.prevent="toggleRegister"
        >
          Register
        </button>
      </div>
    </form>
    <form
      v-else
      @submit.prevent="signup"
      class="signup-container sign-form  flex column"
    >
      <h2>Signup</h2>
      <input v-model="cred.username" type="text" placeholder="Enter username" />
      <input v-model="cred.email" type="email" placeholder="Enter email" />
      <div v-if="error.email" class="error email-error">
        <fa icon="exclamation-triangle" class="fa-icon fa-size"/>
        {{ error.email }}
      </div>
      <input
        v-model="cred.password"
        type="password"
        placeholder="Enter password"
      />
      <div v-if="error.password" class="error password-error">
        <fa icon="exclamation-triangle" class="fa-icon fa-size"/>
        {{ error.password }}
      </div>
      <div class="btns flex space-between">
        <button class="btn btn-action btn-signup" type="submit">Signup</button>
        <button
          class="btn btn-secondery btn-back-to-login"
          type="button"
          @click.prevent="toggleRegister"
        >
          Already have an acount
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      cred: {
        email: "",
        password: "",
        username: ""
      },
      isRegistered: true,
      error: {}
    };
  },
  methods: {
    toggleRegister(){
      this.resetData()
      this.isRegistered = !this.isRegistered
    },
    resetData(){
      this.cred = {
        email: "",
        password: "",
        username: ""
      }
      this.error = {}
    },
    async login() {
      const valid = this.validateForm()
      if(!valid)return
      const user = await this.$store.dispatch("login", { userCred: this.cred });
      if (user) this.$router.push("/group");
      else console.log("Wrong email or password!");
    },
    async signup() {
      const valid = this.validateForm()
      if(!valid)return
      const user = await this.$store.dispatch("signup", { userCred: this.cred });
      if (user) this.$router.push("/group");
    },
    validateForm() {
      if (this.cred.email && this.cred.password) {
        return true;
      }

      this.error = {};

      if (!this.cred.email) {
        this.error.email = "Email is required";
      }

      if (!this.cred.password) {
        this.error.password = "Password is required";
      }
    }
  },
  mounted() {
    this.$refs.email.focus();
  }
};
</script>

<style lang="scss">
.sign-form-container {
  box-shadow: 0 0 4px gray;
  width: 500px;
  margin: auto;
  margin-top: 100px;
  padding: 40px;
  .sign-form {
    h2 {
      text-align: start;
      margin-bottom: 10px;
    }
    & > input {
      padding-inline-start: 8px;
      margin-bottom: 8px;
      height: 28px;
      border: none;
      border-bottom: 1px solid gray;
      border-radius: 3px;
      font-size: 1.1rem;
    }
  }

  .btn-action {
    padding: 5px 8px;
    background-color: #0e0e0e;
    color: #f1f1f1;
    &:hover {
      background-color: #424242;
    }
  }
  .btn-secondery {
    &:hover {
      color: #555555;
      text-decoration: underline;
    }
  }
  .error {
    color: red;
    text-align: start;
    display: flex;
    align-items: flex-end;
    margin-bottom: 4px;
    .fa-icon {
      margin-inline-end: 8px;
    }
    .fa-size{
      width: 20px;
      height: 20px;
    }
  }
}
</style>
