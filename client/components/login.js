const app = {
  template: `
  <div class="header">
    <a class="logo">Chismografo</a>
    <div class="header-right">
      <a class="" href="/">Home</a>
      <a class="" href="/question">Create a Question</a>
    </div>
    <a href="/login" class="loginButton active">Login</a>
  </div>

  <h1 class="centerH1">Create User</h1>
  <div class="box">
    <form class="login" @submit.prevent="onSubmit">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" v-model="nameVal"><br>
      <label for="email">E-mail:</label><br>
      <input type="text" id="email" name="email" v-model="emailVal"><br><br>
      <label for="password">Password:</label><br>
      <input type="text" id="password" name="password" v-model="passVal"><br><br>

      <input type="submit" value="Submit">
    </form>
  </div>
    `,
  data() {
    return {
      nameVal: "",
      emailVal: "",
      passVal: ""
    }
  },
  methods: {
    onSubmit(e) {
      axios.post('/user-management/user', {
        name: this.nameVal,
        email: this.emailVal,
        password: this.passVal,
      })
        .then((response) => {
          console.log("me mando esto el servidor", response);
        }, (error) => {
          console.log("ohh no Pancho un error", error);
        });
    }
  }
}

const loginComponent = Vue.createApp(app);

loginComponent.component('login', loginComponent)
loginComponent.mount('#login')
