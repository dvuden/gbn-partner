<template slot="formulier">
  <v-form v-model="isValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h2 class="subheader">Invoer KVK nummer</h2>
        </v-col>
      </v-row>

      <!-- <v-row v-if="formstatus=='kvkcheck'"> -->
      <v-row>
        <v-col cols="6">
          <v-text-field :rules="rulesKVK" placeholder="KVK nummer" solo v-model="KVKnummer"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-btn @click="confirmKVK()">Bevestig</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "FormInvoerKVK",
  props: {},
  methods: {
    confirmKVK: function() {
      this.$emit("confirm-KVK", this.KVKnummer);
    }
  },
  data: () => ({
    isValid: true,
    KVKnummer: "69599084",
    rulesKVK: [v => /^[0-9]{8}$/.test(v) || "Ongeldig kvk nummer"]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
