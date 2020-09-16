import ApiProxy from "@/proxies/ApiProxy";
//import axios from 'axios';

import { SET_LOADING, SET_RESULT, SET_LIST, SET_KVKNUMMER } from "./mutation-types";

// const sendMail = ({ commit }, { obj }) => {
//   // console.log("contact.actions sendMail()");
//   // console.log(obj);
//   commit(SET_LOADING, true);
//   //commit(SET_MAILBODY, obj);
//   new ApiProxy("sendMail")
//     .sendMail(obj)
//     .then(result => {
//       console.log("result sendMail");
//       console.log(result);
//       commit(SET_RESULT, result);
//       commit(SET_LOADING, false);
//     })
//     .catch(() => {
//       commit(SET_LOADING, false);
//     });
// };


// test api om kvk gegevens op te vragen bij de KVK.
// const apiKVK = ({ commit }, { hlpkvknummer }) => {
//     console.log("apiKVK");

//     const url = "https://api.kvk.nl/api/v2/testsearch/companies?q=69599084";
//     let requestType = "GET";

//     axios(url)
//         .then(response => {
//             console.log("axios response");
//             console.log(response);
//         })
//         .catch(err => {
//             if (err) {
//                 console.log("proxy.submit.catch");
//                 console.log(err);
//                 reject(err);
//             } else {
//                 reject(new Error("REST Client error"));
//             }
//         });
// }


// Aanvraag opslaan in de database.
// node 'api/partners/:kvknummer', dbPartners.getByKVK
const getPartnerByKvk = ({ commit }, { hlpkvknummer }) => {

    console.log("Actions: getPartner");
    console.log(hlpkvknummer);
    //console.log(JSON.parse(JSON.stringify(obj)));

    // ingevoerde kvk nummer opslaan in een eigen variabele.
    commit(SET_KVKNUMMER, hlpkvknummer);

    //kvk nummer op 0 zetten omdat daardoor het formulier getoond wordt als er geen record terug komt
    commit(SET_RESULT, { kvknummer: "0" });
    commit(SET_LOADING, true);

    new ApiProxy("partners")
        .find(hlpkvknummer)
        .then(res => {
            console.log("actions result getpartner");
            console.log(res);
            if (res.data != null) {
                console.log("er is een record gevonden in de database");
                // console.log(JSON.stringify(res.data));
                //opgehaalde record in variabele partner opslaan.
                commit(SET_RESULT, res.data);
            } else {
                commit(SET_RESULT, { kvknummer: "0" });
            }

            //commit(SET_LIST, res.data);
            commit(SET_LOADING, false);
        })
        .catch((error) => {
            console.log("actions error getpartner");
            console.log(error);
            commit(SET_LOADING, false);
        });
};

// Aanvraag opslaan in de database.
const insPartner = ({ commit }, { obj }) => {

    console.log("Actions: insPartner");
    console.log(obj);
    //console.log(JSON.parse(JSON.stringify(obj)));

    commit(SET_LOADING, true);
    //commit(SET_MAILBODY, obj);
    new ApiProxy("inspartner")
        .create(obj)
        .then(result => {
            console.log("actions result inspartner");
            console.log(result);
            commit(SET_RESULT, result);
            commit(SET_LOADING, false);
        })
        .catch((error) => {
            console.log("actions error inspartner");
            console.log(error);
            commit(SET_LOADING, false);
        });
};

const updPartner = ({ commit }, { obj }) => {

    console.log("Actions: updPartner");
    console.log(obj);
    //console.log(JSON.parse(JSON.stringify(obj)));

    commit(SET_LOADING, true);
    //commit(SET_MAILBODY, obj);
    new ApiProxy("updpartner")
        .update(-999, obj)
        .then(result => {
            console.log("actions result inspartner");
            commit(SET_RESULT, result);
            commit(SET_LOADING, false);
        })
        .catch((error) => {
            console.log("actions error inspartner");
            console.log(error);
            commit(SET_LOADING, false);
        });
};

const loadList = ({ commit }) => {

    console.log("loadList");
    commit(SET_LOADING, true);
    commit(SET_LIST, []);

    new ApiProxy("partners")
        .all()
        .then(res => {
            console.log("loadList");
            console.log(res);
            commit(SET_LIST, res.data.rows);
            commit(SET_LOADING, false);
        })
        .catch(() => {
            commit(SET_LOADING, false);
        });
};


export default {
    getPartnerByKvk,
    insPartner,
    updPartner,
    loadList
    // apiKVK
};
