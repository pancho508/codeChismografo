var app = new Vue({
    el: "#app",
    data: {
      msg: "This should be showing",
    },
    method: {
      onSubmit: (e) => {
        e.preventDefault()
        console.log('this is the event pancho ', e)
      }
    }
  });

console.log("app", app)  