<template>
  <div class="container"></div>
</template>
<script>
import { getProfiles } from "../utils/API.js";

export default {
  name: "profile",
  components: {},
  data() {
    return {
      email: $auth.user.email
    };
  },
  computed: {},
  methods: {},
  mounted: function() {
    getProfiles(email).then(data => {
      this.$store.commit("setProfile", data);
    });
  }
};
</script>

<style lang="scss" scoped></style>
