<template>
  <div>
    <TopBar @goto-Inschrijven="gotoInschrijven" />
    <!-- <slot name="menu">
      <Navbar @goto-Page="gotoPage" @open-Menu="openMenu"></Navbar>
    </slot>-->
    <main class="main">
      <PageHeader msg="Goede boekhouder nodig" />
      <img src="../assets/logo.png" />
      <!-- <Navbar @goto-Page="gotoPage" @open-Menu="openMenu"></Navbar> -->
      <div class="container"></div>
    </main>

    <!-- footer -->
    <slot name="footer"></slot>
    <!-- <slot name="debug" v-if="dev">
      <DebugInfo />
    </slot>-->
  </div>
</template>

<script>
//import DebugInfo from "@/components/DebugInfo.vue";
//import Navbar from "@/components/Navbar.vue";
import PageHeader from "@/components/PageHeader.vue";
import TopBar from "@/components/TopBar.vue";
export default {
  name: "layoutWeb",
  components: {
    PageHeader,
    TopBar
  },
  props: {
    collapsed: Boolean
  },
  data: function() {
    return {
      dev: process.env.NODE_ENV !== "production"
    };
  },
  methods: {
    // openMenu: function() {
    //   console.log("openMenu()");
    //   this.collapsed = !this.collapsed;
    // },
    gotoInschrijven: function() {
      this.$router.push({ name: "inschrijven" });
    }
    // gotoPage: function(item) {
    //   if (this.$route.path !== "/" + item.desc)
    //     this.$router.push({ name: item.desc });
    // }
  }
};
</script>

<style lang="scss" scoped></style>
