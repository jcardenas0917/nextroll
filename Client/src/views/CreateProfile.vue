<template>
  <div class="container">
    <form action="">
      <label for="fname">Name:</label><br />
      <input
        class="inputBox"
        type="text"
        id="name"
        name="name"
        v-model="userProfile.name"
      /><br />
      <label for="belt">Belt:</label><br />
      <input
        class="inputBox"
        type="text"
        id="belt"
        name="belt"
        v-model="userProfile.belt"
      /><br />
      <label for="stripes">Stripes:</label><br />
      <input
        class="inputBox"
        type="text"
        id="stripes"
        name="stripes"
        v-model="userProfile.stripes"
      /><br />
      <label for="academy">Academy:</label><br />
      <input
        class="inputBox"
        type="text"
        id="academy"
        name="academy"
        v-model="userProfile.academy"
      /><br />
      <label for="city">City:</label><br />
      <input
        class="inputBox"
        type="text"
        id="city"
        name="city"
        v-model="userProfile.city"
      /><br />
      <label for="technique">Favorite Technique:</label><br />
      <input
        class="inputBox"
        type="text"
        id="technique"
        name="technique"
        v-model="userProfile.technique"
      /><br />
      <label for="instructor">Instructor:</label><br />
      <input
        class="inputBox"
        type="text"
        id="instructor"
        name="instructor"
        v-model="userProfile.instructor"
      /><br />
      <label for="image">Image:</label><br />
      <input
        class="inputBox"
        type="text"
        id="image"
        name="image"
        v-model="userProfile.image"
      /><br /><br />
    </form>
    <button type="button" class="submit" v-on:click="createProfile()">
      <b>Create Profile</b>
    </button>
  </div>
</template>

<script>
import { saveProfile } from "../utils/API.js";
export default {
  name: "CreateProfile",
  components: {},
  data() {
    return {
      userProfile: {
        email: this.$auth.user.email,
        nickname: this.$auth.user.nickname,
        name: "",
        belt: "",
        stripes: "",
        academy: "",
        city: "",
        technique: "",
        instructor: "",
        image: ""
      }
    };
  },
  methods: {
    createProfile() {
      saveProfile(this.userProfile).catch(err => console.log(err));
      console.log(this.userProfile);
    }
  }
};
</script>

<style lang="scss" scoped></style>
