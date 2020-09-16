<template>
  <div>
    <TopBar @goto-Home="gotoHome" />
    <PageHeader msg="Inschrijven financiële dienstverlener." />
    <!-- <slot name="menu">
      <Navbar @goto-Page="gotoPage" @open-Menu="openMenu"></Navbar>
    </slot>-->
    <div class="container section">
      <div class="formulier">
        <slot />
      </div>
    </div>

    <!-- footer -->
    <slot name="footer"></slot>
    <!-- <slot name="debug" v-if="dev">
      <DebugInfo />
    </slot>-->
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TopBar from "@/components/TopBar.vue";
export default {
  name: "layoutformulier",
  components: {
    PageHeader,
    TopBar
  },
  props: {
    // collapsed: Boolean
  },
  data: function() {
    return {
      // dev: process.env.NODE_ENV !== "production"
    };
  },
  methods: {
    gotoHome: function() {
      this.$router.push({ name: "Home" });
    }
    // openMenu: function() {
    //   console.log("openMenu()");
    //   this.collapsed = !this.collapsed;
    // },
    // gotoInschrijven: function() {
    //   this.$router.push({ name: "inschrijven" });
    // }
    // gotoPage: function(item) {
    //   if (this.$route.path !== "/" + item.desc)
    //     this.$router.push({ name: item.desc });
    // }
  }
};
</script>

<style scoped></style>
