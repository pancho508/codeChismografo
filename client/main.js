const vueFunc = Vue.createApp({
  data() {
    return {
    //   loginPage: false,
    //   createPage: false,
    //   questionPage: false,
    //   homePage: true,
        currentPage: 'homePage'
    }
  },
  methods: {
    //loginpage createPage questionPage homePage
    changePage(page) {
        this.currentPage = page
    }
  }
});

vueFunc.mount('#app');