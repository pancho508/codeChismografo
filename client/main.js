var app = new Vue({
    el: "#app",
    data: {
      msg: "This should be showing",
      fvalue: "",
      lvalue: ""
    },
    methods: {
      onSubmit: function (e) {
        console.log("first name -->", this.fvalue)
        console.log("last name -->", this.lvalue)
        console.log('this is the event pancho ', e.target.fname.value)
      }
    }
  });