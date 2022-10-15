var app = new Vue({
    el: "#app",
    data: {
      msg: "This should be showing",
      nameVal: "",
      emailVal: "",
      passVal: "",
    },
    methods: {
      onSubmit: function (e) {
        axios.post('/user-management/user', {
          name: this.nameVal,
          email: this.emailVal,
          password: this.passVal,
        })
        .then((response) => {
          console.log("me mando esto el servidor", response);
        }, (error) => {
          console.log("ohh no Pancho un error",error);
        });
      }
    }
  });