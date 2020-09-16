<template>
  <layoutFormulier>
    <div class="inschrijven">
      <slot>
        <div v-if="this.formstatus=='stepInvoerKVK'">
          <frmInvoerKVK @confirm-KVK="confirmKVK" />
        </div>

        <div v-if="this.kvknummer!='0'">
          <h2>KVK-nummer: {{ this.kvknummer }}</h2>
        </div>

        <div v-if="this.formstatus=='stepInschrijven'">
          <frmInschrijven
            @commit-form="verzenden"
            :typeBedrijf="type_Bedrijf"
            :formstatus="formstatus"
            :curKVKnummer="this.kvknummer"
          />
        </div>
        <div v-if="loading">ophalen gegevens</div>
      </slot>
      <!-- </main> -->
    </div>
  </layoutFormulier>
</template>

<script>
import { mapState, mapActions } from "vuex";
import layoutFormulier from "@/layouts/layoutFormulier.vue";
import frmInvoerKVK from "@/components/forms/FormInvoerKVK.vue";
import frmInschrijven from "@/components/forms/FormInschrijven.vue";
// import PageHeader from "@/components/PageHeader";
export default {
  name: "Inschrijven",
  components: {
    // PageHeader,

    layoutFormulier,
    frmInvoerKVK,
    frmInschrijven
  },
  computed: {
    ...mapState("partners", ["loading", "partner", "list", "kvknummer"])
  },
  mounted() {
    console.log("Inschrijven.vue mounted");
    //this.loadList();
    console.log("na loadlist");
    console.log(this.$store.state);
    //console.log(this.$store.state.partners.list);
    console.log(this.$store.getters.partner);
  },
  updated() {
    console.log("Inschrijven.vue updated");
    console.log(JSON.stringify(this.partner));
    console.log(this);

    if (this.partner.kvknummer == "0") {
      this.formstatus = "stepInschrijven";
    }
    console.log(this.formstatus);
  },
  data: () => ({
    type_Bedrijf: ["Eenmanszaak", "V.O.F.", "B.V.", "Anders"],
    formstatus: "stepInvoerKVK"
  }),
  methods: {
    ...mapActions({
      insPartner: "partners/insPartner",
      updPartner: "partners/updPartner",
      getPartnerByKvk: "partners/getPartnerByKvk",
      loadList: "partners/loadList"
    }),
    confirmKVK: function(i_kvk) {
      console.log("bevestig kvk nummer");
      console.log(i_kvk);

      const params = {
        hlpkvknummer: i_kvk
      };

      this.getPartnerByKvk(params);
    },
    verzenden: function(i_form) {
      console.log("verzenden");
      console.log(this.formstatus);

      console.log("verzenden formulier.");
      console.log(JSON.stringify(i_form));

      console.log("status: " + this.formstatus);

      if (this.formstatus == "kvkcheck") {
        console.log(
          "inschrijven.vue => formstatus kvkcheck " + i_form.kvknummer
        );
        const params = {
          hlpkvknummer: i_form.kvknummer
        };

        this.getPartnerByKvk(params);
      }

      if (this.formstatus == "inschrijven") {
        console.log("inschrijven.vue => formstatus inschrijven");
        const params = {
          obj: {
            bedrijf: i_form.bedrijf,
            bedrijftype: i_form.bedrijftype,
            straat: i_form.straat,
            huisnummer: i_form.huisnummer,
            huisnummertoevoeging: i_form.huisnummertoevoeging,
            postcode: i_form.postcode,
            woonplaats: i_form.woonplaats,
            email: i_form.email,
            telefoon: i_form.telefoon,
            kvknummer: this.kvknummer,
            btwnummer: i_form.btwnummer
          },
          order: {
            orderCol: this.orderCol,
            orderDir: this.orderDir
          }
        };
        this.insPartner(params).then(response => {
          console.log("inschrijven.vue: response updPartner()");
          console.log(response);
          //this.$router.push({ name: "bedankt", params: i_form });
        });
      }
    }
  }
};
</script>
