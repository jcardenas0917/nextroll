<template>
  <div class="container"></div>
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
  computed: {},
  methods: {},
  mounted: function() {
    getProfile(this.email).then(data => {
      this.$store.commit("setProfile", data);
    });
  }
};
</script>

<style lang="scss" scoped></style>
