export default {
  loading: state => {
    return state.loading;
  },
  to: state => {
    return state.to;
  },
  body: state => {
    return state.body;
  },
  subject: state => {
    return state.subject;
  },
  partner: state => {
    return state.partner;
  },
  list: state => {
    //console.log("getters list");
    return state.list;
  },
  kvknummer: state => {
    return state.kvknummer;
  }
};
