<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense white>
      <v-btn @click="gotoHome()" icon color="blue">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Goedkope Boekhouder Nodig</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="blue">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
      <v-btn elevation="3" small type="submit" @click="gotoInschrijven()"
        >Inschrijven</v-btn
      >
      <v-btn elevation="3" small>Inloggen</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    //msg: String
  },
  methods: {
    gotoInschrijven: function() {
      this.$emit("goto-Inschrijven");
    },
    gotoHome: function() {
      this.$emit("goto-Home");
    }
  }
};
</script>

<style scope></style>
