const app = Vue.createApp({
  data() {
    return {
      firstName: "Ananth",
      lastName: "Kumbla",
      email: "ananth.kumbla@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch(`https://randomuser.me/api`);
      const { results } = await res.json();
      console.log(results);
      const { email, gender, name, picture } = results[0];
      this.firstName = name.first;
      this.lastName = name.last;
      this.email = email;
      this.gender = gender;
      this.picture = picture.large;
    },
  },
});
app.mount("#app");
