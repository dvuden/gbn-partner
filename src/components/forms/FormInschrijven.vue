<template slot="formulier">
  <v-form v-model="isValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h2 class="subheader">Bedrijfsgegevens</h2>

          <!-- <h4>kvknummer: {{ curKVKnummer }}</h4> -->
        </v-col>
      </v-row>

      <!-- <v-row v-if="formstatus=='kvkcheck'">
        <v-col cols="6">
          <v-text-field placeholder="KVK nummer" solo v-model="form.kvknummer"></v-text-field>
        </v-col>
      </v-row>-->

      <!-- <div v-if="formstatus=='inschrijven'"> -->
      <div>
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field
              placeholder="Bedrijfsnaam"
              solo
              v-model="form.bedrijf"
              :rules="rulesRequired"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <div data-app>
              <v-select
                required
                :items="typeBedrijf"
                item-text="text"
                item-value="value"
                placeholder="type bedrijf"
                solo
                v-model="form.bedrijftype"
              ></v-select>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field placeholder="Straat" solo v-model="form.straat"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field placeholder="Huisnummer" solo v-model="form.huisnummer"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Solo"
              placeholder="Huisnr Toevoeging"
              solo
              v-model="form.huisnummertoevoeging"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field placeholder="Postcode" solo v-model="form.postcode"></v-text-field>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field placeholder="Woonplaats" solo v-model="form.woonplaats"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8">
            <v-text-field placeholder="Email" solo v-model="form.email" :rules="rulesEmail"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Telefoon"
              solo
              v-model="form.telefoon"
              :rules="rulesTelefoon"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="KVK-nummer"
              solo
              v-model="form.kvknummer"
              :rules="rulesRequired"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="BTW-nummer"
              solo
              v-model="form.btwnummer"
              :rules="rulesRequired"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <h2 class="subheader">Contact gegevens</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field placeholder="Roepnaam" solo v-model="form.roepnaam"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field placeholder="Tussennaam" solo v-model="form.tussennaam"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Solo" placeholder="Achternaam" solo v-model="form.achternaam"></v-text-field>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="12">
          <v-btn @click="commitForm(form)">Verzenden</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "FormInschrijven",
  props: {
    typeBedrijf: Array,
    formstatus: String,
    curKVKnummer: String
  },
  methods: {
    commitForm: function(form) {
      this.$emit("commit-form", form);
    }
  },
  data: () => ({
    rulesRequired: [v => !!v || "Invoer verplicht"],
    rulesEmail: [
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Ongeldig email adres"
    ],
    rulesTelefoon: [
      v =>
        /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(
          v
        ) || "ongeldig telefoonnummer"
    ],
    //Bedrijfsvorm: ["Eenmanszaak", "V.O.F.", "B.V.", "Anders"]
    isValid: true,
    form: {
      // bedrijf: "Benvd",
      // bedrijftype: "B.V.",
      // straat: "Picassoweg",
      // huisnummer: "59",
      // huisnummertoevoeging: null,
      // postcode: "1328 KK",
      // woonplaats: "Almere",
      // email: "info@benvd.nl",
      // telefoon: "06-12334578",
      // kvknummer: "kvk-",
      // btwnummer: "btw-",
      // roepnaam: "Tamara",
      // tussennaam: null,
      // achternaam: "Brouwer"
    }
    //formstatus: "pccheck"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
