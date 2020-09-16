<template>
  <div class="pageheader">
    <section>
      <div class="pageheader__text">{{ msg }}</div>
      <!-- <div class="pageheader__image">
        <img src="../assets/logo.png" />
      </div>-->
    </section>
  </div>
</template>

<script>
//import image from "../images/logo.png";

export default {
  name: "PageHeader",
  props: {
    msg: String
  }
};
</script>

<style>
.pageheader__text {
  color: blue;
  font-size: 2.4em;
}
</style>
