<template>
  <v-layout>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

      <template slot="footer">Footer</template>
    </div>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import VLayout from "@/layouts/layoutWeb.vue";

export default {
  name: "Home",
  components: {
    VLayout
  }
};
</script>