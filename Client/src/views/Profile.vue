<template>
  <div class="container">
    <div class="unitContainer">
      <ul>
        <li v-for="item in userProfile" :key="item._id">
          <p>
            <b>Name: {{ item.name }}</b>
          </p>
          <p>Belt: {{ item.Belt }}</p>
          <p>academy: ({{ item.academy }})</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getProfile } from "../utils/API.js";
export default {
  name: "profile",
  components: {},
  data() {
    return {
      email: this.$auth.user.email
    };
  },
  computed: {
    userProfile() {
      return this.$store.state.profile;
    }
  },
  methods: {},
  mounted: function() {
    getProfile(this.email).then(data => {
      this.$store.commit("setProfile", data);
    });
  }
};
</script>

<style lang="scss" scoped></style>
